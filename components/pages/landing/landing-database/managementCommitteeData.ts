export interface CommitteeMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ManagementCommitteeData {
  advisoryCommittee: CommitteeMember[];
  alumniAssociationTeam: CommitteeMember[];
}

export const managementCommitteeData: ManagementCommitteeData = {
  advisoryCommittee: [
    {
      name: "Dr. [Name]",
      role: "Chief Advisor",
      image: "/assets/images/management/advisory/AdvisoryTeam.jpeg",
      description: "Renowned educationist with extensive experience in academic leadership."
    },
    {
      name: "Mr. [Name]",
      role: "Senior Advisor",
      image: "/assets/images/management/advisory/AdvisoryTeam.jpeg",
      description: "Veteran administrator with deep insights into educational policy."
    }
  ],
  alumniAssociationTeam: [
    {
      name: "[Name]",
      role: "President",
      image: "/assets/images/management/alumniAssociationTeam/AlumniAssociationTeam.jpeg",
      description: "Leads the strategic vision and initiatives of the alumni association."
    },
    {
      name: "[Name]",
      role: "Vice President",
      image: "/assets/images/management/alumniAssociationTeam/AlumniAssociationTeam.jpeg",
      description: "Supports overall management and coordinates key association activities."
    },
    {
      name: "[Name]",
      role: "Secretary",
      image: "/assets/images/management/alumniAssociationTeam/AlumniAssociationTeam.jpeg",
      description: "Manages administrative operations and communication."
    },
    {
      name: "[Name]",
      role: "Treasurer",
      image: "/assets/images/management/alumniAssociationTeam/AlumniAssociationTeam.jpeg",
      description: "Oversees financial planning and resource management."
    }
  ]
};
