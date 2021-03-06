export const initialValueForCreateForm = {
	record_type: 'DLM_RECORD',
	property_id: null,
	property_descriptor: '',
	certificate_references: '',
	doc_signed_date: '',
	estate_no: '',
	recording_fee: '',
	ownership_type: '',
	process_date: '',
	recorded_date: '',
	execution_date: '',
	closing_party: '',
	lm_check_no: '',
	transaction_type: null,
	transaction_value: '',
	lender_value: '',
	lender_name: '',
	docno: '',
	document_references: '',
	mortgage_amount: null,
	maturity_date: '',
	mortgage_lender: null,
	lien_no: '',
	court_case_no: '',
	vesting_option: '',
	tax_no: '',
	files: '',
	map_file: '',
	image: '',
	legal_descriptor_record: '',
	cluster: '',
	mortgage: '',
	grantees: [],
	grantors: [],
	notes: []
};



export const extraValuesForUserCreateForm = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	status: '1',
	role_id: '1',
	 
};

export const extraValuesForCreateForm = {
	condo: '',
	condo_name: '',
	unit: '',
	block: '',
	tract: '',
	mun: 'M00',
	lot: '',
	area: '',
	uom: '',
	estate_name: '',
	neighborhood: '',
	phase: '',
	increment: '',
	legal_descriptor: ''
};

export const extraValuesTransactionCreate = {
	transaction_type: ''
};

export const extraValuesMortgagelenderCreate = {
	name: ''
};

export const AddGrantorTypeInitial = {
	name: ''
}

export const AddGranteeTypeInitial = {
	name: ''
}

export const AddTransactionTypeInitial = {
	transaction_type: '',
	transaction_class: '',
	doc_for:''
}

export const AddExceptionTypeInitial = {
	exception_id: '',
	title: '',
	status:''
}

export const AddDocumentInitial = {
	efilling_id: '',
	transaction_type_id: '',
	grantor_required: true,
	grantee_required: true,
	consideration_amount: true,
	transaction_type_required: true,
	group_id:''
}

export const EFileTypeInitial = {
	description: ''
}

export const FeesInitial = {
	module:'',
	type: '',
	value: '',
}

export const MethodInitial = {
	method_name: '',
	rec_fees: '',
	exhibit_fees: '',
	exhibit_per_page_fees: '',
	parcel_fees: '',
	mortgage_percentage: '',
	additional_sheet_fees:''
}

export const AddVestingOptionInitial = {
	name: ''
}
export const AddOwnershipVestingInitial = {
	name: ''
}
