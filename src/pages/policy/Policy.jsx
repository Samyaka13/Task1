import { useState } from 'react'
import Dropdown from '../../components/DropDown/dropdown'
import { data } from './policyData'
import TitleBar from '../../components/titlebar/TitleBar'
import PolicyCard from '../../components/PolicyCard/PolicyCard'
import PolicyConfig from './PolicyConfig'
function Policy() {
    const tabs = [{ label: "Policy Configuration", key: 1 },
    { label: "Expense Approvals", key: 2 },
    { label: "Procure to Pay", key: 3 },
    { label: "Travel Approvals", key: 4 },
    { label: "Summary", key: 5 },
    { label: "Settings", key: 6 },
    ]
    
    console.log(data.categories[0])


    return (
        <div className='pl-10'>
            <TitleBar title={"Policy Programme"} tabs={tabs} activeTab={1} />
        <PolicyConfig />
        </div>
    )
}

export default Policy

