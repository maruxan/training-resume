import React from 'react';

import { htmlCss, javascript } from '../../data/projects';

import { Box, Link } from '@chakra-ui/react';
import { AtSignIcon, StarIcon, LinkIcon } from '@chakra-ui/icons';
import Folder from '../Folder/Folder';
import File from '../File/File';
import About from '../About/About';

export default function Explorer() {
  return (
    <Box py={{ base: 5, md: 8 }} px={{ base: 4, md: '8%' }}>
      <Folder dirname="about">
        <About>
          <File filename="about.me" icon={<AtSignIcon />} />
        </About>
      </Folder>
      <Folder dirname="projects">
        <Folder dirname="html-css">
          {htmlCss.map((project) => (
            <Link href={project.url} isExternal key={project.name}>
              <File filename={project.name} icon={<StarIcon />} />
            </Link>
          ))}
        </Folder>
        <Folder dirname="javascript">
          {javascript.map((project) => (
            <Folder dirname={project.name} key={project.name}>
              <Link href={project.website} isExternal>
                <File filename="website" icon={<StarIcon />} />
              </Link>
              <Link href={project.repo} isExternal>
                <File filename="repo" icon={<LinkIcon />} />
              </Link>
            </Folder>
          ))}
        </Folder>
      </Folder>
    </Box>
  );
}
