import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa500px, faInstagram, faTwitter, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface FooterIconProps {
  icon: IconDefinition,
  link: string
}

function FooterIcon(props: FooterIconProps) {
  return <a className="footerIcon" href={props.link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={props.icon}/>
  </a>
}

export default function Footer() {
  return <div className="footer">
    <div>
    </div>
    <div className="author">
      Maria Klaß
    </div>
  </div>;
}