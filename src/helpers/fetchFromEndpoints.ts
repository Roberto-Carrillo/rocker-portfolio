
export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

    const data = await res.json();
    const skills: Technology[] = data.skills;
    
    return skills;
}
export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;
    
    return socials;
}
export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    
    return experiences;
}
export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;
    
    return projects;
}
export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    
    return pageInfo;
}