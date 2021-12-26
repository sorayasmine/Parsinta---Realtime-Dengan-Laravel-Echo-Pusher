import App from '@/Layouts/App'
import React from 'react'
import { Head } from '@inertiajs/inertia-react'

export default function Show(props) {

    const { user } = props

    return (
        <div>
            <Head title={`Chat with ${user.name}`} />

            <div className="flex flex-col justif-between h-screen">

                <div className="border-b p-4">
                    <h1 className="font-semibold">{user.name}</h1>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2">
                    <div className='tetx-gray-500'>
                        Start chat with someone . . .
                    </div>
                </div>

                <div className="border-t">
                    <input type="text" placeholder='Start typing . . .' name="message" id="message" className="form-text focus:outline-none focus:border-0 focus:ring-0 border-0 w-full" />
                </div>

            </div>

        </div>
    )

}


Show.layout = (page) => <App children={page} />
