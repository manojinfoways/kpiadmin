import * as React from "react";
import {useState} from "react";
import {Button} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {Cancel, ChatBubble, Edit, Notes, PersonAdd, PinDrop, Print, Receipt} from "@material-ui/icons";
import {Menu, MenuButton, MenuDivider, MenuHeader, MenuItem, MenuRadioGroup, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {useHistory} from "react-router";
import Icon from "@material-ui/core/Icon";
import PrintPTRModal from "./PrintPTRModal";
import axios from "axios";
import {showError, showSuccess} from "app/utils/helpers";
import PTRNotesModal from "./PTRNotesModal";
import {useSelector} from "react-redux";

const useStyles = makeStyles({
        menuList: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&:before': {
                top: '50% !important',
                transform: 'translateY(-50%)',
            },
        },
        headerChild: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 16px 0'
        }
    }
)

const DropDown = (props) => {

    const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);
    const [printAll, setPrintAll] = useState(false);

    const user = useSelector(({auth}) => auth.user);

    const classes = useStyles();
    const history = useHistory();

    const itemData = [
        {
            id: 0,
            name: props.requestType === "E-File" ? "Review E-File" : "Review PTR",
            icon: <PinDrop/>,
            onClick: () => {
                if (user.role.includes("admin"))
                    history.push(`/ptr/admin/properties/${props.data.id}`)
                else if (user.role.includes("researcher"))
                    history.push(`/ptr/researcher/properties/${props.data.id}`)
                else
                    history.push(`/ptr/poster/properties/${props.data.id}`)
            }
        },
        {
            id: 1,
            name: "Researcher Assignment",
            icon: <PersonAdd/>,
            childrenHeaders: ["Researcher", "Workload"],
            children: props.researchers.map(res => ({
                id: res.user_id,
                name: `${res.firstname} ${res.lastname}`,
                workload: res.availability,
                onClick: () => assignResearcher(props.data.id, res.user_id)
            }))
        },
        {
            id: 2,
            name: "Transaction Log View",
            icon: <Receipt/>
        },
        {
            id: 3,
            name: "Edit",
            icon: <Edit/>,
            childrenHeaders: props.requestType === "E-File" ? "" : ["Edit PTR",],
            children: props.requestType === "E-File" ? "" : [
                {
                    id: 1,
                    name: "Document Info",
                    onClick: () => {
                        if (user.role.includes("admin"))
                            history.push(`/ptr/admin/documents-info/${props.data.id}`)
                        else if (user.role.includes("researcher"))
                            history.push(`/ptr/researcher/documents-info/${props.data.id}`)
                        else
                            history.push(`/ptr/poster/documents-info/${props.data.id}`)
                    }
                },
                {
                    id: 2,
                    name: "Chain of Title",
                    onClick: () => {
                        if (user.role.includes("admin"))
                            history.push(`/ptr/admin/chain-of-title/${props.data.id}`)
                        else if (user.role.includes("researcher"))
                            history.push(`/ptr/researcher/chain-of-title/${props.data.id}`)
                        else
                            history.push(`/ptr/poster/chain-of-title/${props.data.id}`)
                    }
                },
                {
                    id: 3,
                    name: "Legacy Association",
                    onClick: () => {
                        if (user.role.includes("admin"))
                            history.push(`/ptr/admin/legacy/${props.data.id}`)
                        else if (user.role.includes("researcher"))
                            history.push(`/ptr/researcher/legacy/${props.data.id}`)
                        else
                            history.push(`/ptr/poster/legacy/${props.data.id}`)
                    }
                },
                {
                    id: 4,
                    name: "Summary",
                    onClick: () => {
                        if (user.role.includes("admin"))
                            history.push(`/ptr/admin/research-summary/${props.data.id}`)
                        else if (user.role.includes("researcher"))
                            history.push(`/ptr/researcher/research-summary/${props.data.id}`)
                        else
                            history.push(`/ptr/poster/research-summary/${props.data.id}`)
                    }
                },
                {
                    id: 5,
                    name: "Name Check",
                    onClick: () => {
                        if (user.role.includes("admin"))
                            history.push(`/ptr/admin/name-check/${props.data.id}`)
                        else if (user.role.includes("researcher"))
                            history.push(`/ptr/researcher/name-check/${props.data.id}`)
                        else
                            history.push(`/ptr/poster/name-check/${props.data.id}`)
                    }
                },
                {
                    id: 6,
                    name: "Satisfaction",
                    onClick: () => {
                        if (user.role.includes("admin"))
                            history.push(`/ptr/admin/satisfaction/${props.data.id}`)
                        else if (user.role.includes("researcher"))
                            history.push(`/ptr/researcher/satisfaction/${props.data.id}`)
                        else
                            history.push(`/ptr/poster/satisfaction/${props.data.id}`)
                    }
                }
            ]
        },
        {
            id: 4,
            name: "Messages",
            icon: <ChatBubble/>,
            onClick: () => openChatPopUp(props.data)
        },
        {
            id: 4,
            name: "PTR Notes",
            icon: <Notes className={props.data.admin_notes ? "" : "text-gray-400"}/>,
            onClick: () => props.data.admin_notes && setIsNotesPopupOpen(true)
        },
        {
            id: 5,
            name: "Print",
            icon: <Print/>,
            onClick: () => setPrintAll(true)
        },
        {
            id: 6,
            name: "Cancel",
            icon: <Cancel/>,
            onClick: () => handlePTRDelete(props.data.id)
        },
    ]
 
    const openChatPopUp = (data) => {
        props.setChatRequestData(data); 
        props.setIsChatPopUpOpen(true);
    }

    const handlePTRDelete = (ptrId) => {
        axios.post(`/properties/deletePTR`, {
            "request_id": ptrId
        }).then(response => {
            if (response.data.success) {
                showSuccess(response?.data?.message);
                props.refreshData();
            }
        }).catch(error => {
            showError(error.response?.data?.message);
        });
    }

    const assignResearcher = (ptrId, userId) => {
        axios.post('/assignResearchers', {
            "user_id": userId,
            "ptr_id": ptrId
        }).then(response => {
            if (response.data.status) {
                showSuccess(response?.data?.message);
                props.refreshData();
            }
        }).catch(error => {
            showError(error.response?.data?.message);
        })
    }

    return (
        <>
            <Menu menuButton={<MenuButton><Icon>settings</Icon></MenuButton>} open overflow="auto" position="auto">
                {itemData.map((data, i) => data.children ? (
                        <SubMenu key={i} label={<>{data.icon}&nbsp;{data.name}</>}>
                            <div className={classes.headerChild}>
                                {data.childrenHeaders.map((header, i) => <MenuHeader key={i}>{header}</MenuHeader>)}
                            </div>
                            <MenuDivider/>
                            <MenuRadioGroup value={parseInt(props.data.staff_userid_assigned_to_ptr)}>
                                {data?.children?.map((child, i) => (
                                        <MenuItem key={i} onClick={child.onClick} className={classes.menuList} value={child.id}>
                                            <span>{child.name} </span>
                                            {child.workload &&
                                                <Button color={"info"} variant={"contained"} sx={{px: 4, ml: 2}}
                                                        size={"medium"}>
                                                    {child?.workload}
                                                </Button>}
                                        </MenuItem>
                                    )
                                )}
                            </MenuRadioGroup>
                        </SubMenu>
                    ) : <MenuItem key={i} onClick={data.onClick}>{data.icon}&nbsp;{data.name}</MenuItem>
                )}
            </Menu>

            {printAll && <PrintPTRModal
                openModal={printAll}
                setOpenModal={setPrintAll}
                title="PTR Research Summary Report"
                subTitle="PinPointGuam: Summary Report "
                ptrId={props.data.id}
            />}

            <PTRNotesModal
                openModal={isNotesPopupOpen}
                setOpenModal={setIsNotesPopupOpen}
                data={props.data}
            />

        </>
    );
}

export default DropDown;
