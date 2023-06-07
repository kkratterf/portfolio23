'use client';

// Import core
// Import third parts
import Image from 'next/image';
import { motion } from 'framer-motion';
// Import customs
import urlFor from '../lib/urlFor';
import { Project } from '../typings';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="pt-[40vh] sm:pt-[60vh] relative z-50"
    >
      <motion.div>
        <motion.h1 className="font-bold text-4xl sm:text-6xl">
          Project Archive
        </motion.h1>
      </motion.div>
      <motion.div className="mt-10 sm:mt-20 grid grid-cols-1 gap-y-10 sm:gap-y-20 gap-x-6 2xl:gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ClientSideRoute
            route={`/project-archive/${project.slug.current}`}
            key={project._id}
          >
            <motion.div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
              <div className="relative w-full h-116 sm:h-124 bg-grey-light dark:bg-pop-dark aspect-w-1 rounded-xl overflow-hidden safari_fix">
                <Image
                  className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
              </div>
              <div className="space-y-1 sm:space-y-2 mx-1">
                <h5 className="font-bold text-2xl sm:text-3xl">
                  {project.title}
                </h5>
                <p className="font-medium uppercase text-sm">
                  {project.featured ? (
                    <span className="italic">Case study - </span>
                  ) : (
                    <span className="italic">Showcase - </span>
                  )}
                  {project.category.title}
                </p>
              </div>
            </motion.div>
          </ClientSideRoute>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectList;
