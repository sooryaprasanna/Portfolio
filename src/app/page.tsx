import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import React from "react";
import { Divider } from "@nextui-org/divider";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.title}`,
  description: RESUME_DATA.about,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 font-mono">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty text-base text-muted-foreground">
              {RESUME_DATA.title}
            </p>
            <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}            
                  target="_blank"
                  rel="noopener noreferrer">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
          <h2 className="text-lg font-bold">About 🙋🏻‍♂️</h2>
          <p className="text-pretty text-sm text-muted-foreground">
            {RESUME_DATA.about}
          </p>
          <Divider className="my-4" />
          <h2 className="text-lg font-bold">Experience 👨🏻‍💻</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base leading-none">
                      <a className="hover:underline" href={work.link}                 
                      target="_blank"
                      rel="noopener noreferrer">
                        {work.company}
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                  <h4 className="text-sm leading-none ">
                    {work.title}
                  </h4>
                  <h4 className="text-xs leading-none text-gray-500">
                    {work.start} - {work.end}
                  </h4>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work.description} </li>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <div style={{ marginLeft: '20px' }}><li> {work.description2} </li></div>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <div style={{ marginLeft: '20px' }}><li> {work.description3} </li></div>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work.description4} </li>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <div style={{ marginLeft: '20px' }}><li> {work.description5} </li></div>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <div style={{ marginLeft: '20px' }}><li> {work.description6} </li></div>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <div style={{ marginLeft: '20px' }}><li> {work.description7} </li></div>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work.description8} </li>
                </CardContent>
              </Card>
            );
          })}
          {RESUME_DATA.work2.map((work2) => {
            return (
              <Card key={work2.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                  <h4 className="text-sm leading-none ">
                    {work2.title}
                  </h4>
                  <h4 className="text-xs leading-none text-gray-500">
                    {work2.start} - {work2.end}
                  </h4>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work2.description} </li>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work2.description2} </li>
                </CardContent>
              </Card>
            );
          })}
          {RESUME_DATA.work3.map((work3) => {
            return (
              <Card key={work3.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base leading-none">
                      <a className="hover:underline" href={work3.link}                 
                      target="_blank"
                      rel="noopener noreferrer">
                        {work3.company}
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                  <h4 className="text-sm leading-none ">
                    {work3.title}
                  </h4>
                  <h4 className="text-xs leading-none text-gray-500">
                    {work3.start} - {work3.end}
                  </h4>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work3.description} </li>
                </CardContent>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                <li> {work3.description2} </li>
                </CardContent>
              </Card>
            );
          })}
          <Divider className="my-4" />
          <h2 className="text-lg font-bold">Education 👨🏻‍🎓</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-xs text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
          <Divider className="my-4" />
          <h2 className="text-lg font-bold">Volunteering 👏🏽</h2>
          {RESUME_DATA.volunteering.map((volunteering) => {
            return (
              <Card key={volunteering.title}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base leading-none">
                      {volunteering.title}
                    </h3>
                    <h4 className="text-xs leading-none text-gray-500">
                    {volunteering.start} - {volunteering.end}
                  </h4>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs" style={{ textAlign: 'justify' }}>
                  {volunteering.description}
                </CardContent>
              </Card>
            );
          })}
          <Divider className="my-4" />
          <h2 className="text-lg font-bold">Programming 🥷🏻</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.programming.map((programming) => {
              return <Badge key={programming}>{programming}</Badge>;
            })}
          </div>
          <Divider className="my-4" />
          <h2 className="text-lg font-bold">Technologies 🛠️</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.technologies.map((technologies) => {
              return <Badge key={technologies}>{technologies}</Badge>;
            })}
          </div>
          <Divider className="my-4" />
          <h2 className="text-lg font-bold">Projects 🎓</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  description2={""}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}/>
              );
            })}
          </div>
      </section>
    </main>
  );
}