import ProjectDetails from '@/components/ProjectDetails/ProjectDetails'

export default async function Page({ params }: { params: { project_id: string } }) {
    return (
        <ProjectDetails project_id={params.project_id} />
    )
}