/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ProjectDetails({ project_id }: { project_id: string }) {
    return (
        <MaxWidthWrapper className='pb-6 pt-16'>
            <Card>
                <CardHeader>
                    <CardTitle className='tracking-wide text-3xl'>Green Energy Revolution</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-xl'>
                        Empowering communities to transition to renewable energy. Our project focuses on installing solar panels in rural areas to reduce carbon emissions and provide clean energy solutions. {''}
                        <h1 className='pt-2'>Milestones:</h1>
                        <ul>
                            <li>Complete initial project design.</li>
                            <li> Secure partnerships with local governments.</li>
                            <li>Install solar panels in 10 villages.</li>
                            <li>Provide training for local technicians.</li>
                        </ul>
                    </CardDescription>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}
