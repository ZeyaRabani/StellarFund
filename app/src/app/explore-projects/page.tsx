/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Page() {
    return (
        <MaxWidthWrapper className='pb-6 pt-16'>
            <div className='flex flex-col w-full space-y-3 px-36'>
                <Link href={`/explore-projects/project_efcf163bfc941c2f626193041883`}>
                    <Card>
                        <CardHeader>
                            <CardTitle className='tracking-wide'>Green Energy Revolution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Empowering communities to transition to renewable energy. Our project focuses on installing solar panels in rural areas to reduce carbon emissions and provide clean energy solutions.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>

                <Card>
                    <CardHeader>
                        <CardTitle className='tracking-wide'>EduTech for All</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            A mobile-first educational platform that brings quality education to underprivileged students worldwide. Offering interactive courses and resources in multiple languages.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className='tracking-wide'>AI-Powered Healthcare Assistant</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Revolutionizing healthcare access by creating an AI-powered assistant to provide instant medical advice and preliminary diagnoses based on symptoms.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className='tracking-wide'>Urban Farm Collective</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Turning unused urban spaces into sustainable farms to provide fresh produce to local communities and promote healthy living in cities.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className='tracking-wide'>Crypto-Based Microloans for Entrepreneurs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Creating a decentralized platform to offer microloans to small business owners in developing countries, empowering entrepreneurship and financial inclusion.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </MaxWidthWrapper>
    )
}
