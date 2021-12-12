import classes from '../styles/home.module.css';
import Link from 'next/link';
import {
  AiOutlineProfile,
  AiOutlineMail,
  AiOutlineLaptop,
  AiOutlinePhone,
} from 'react-icons/ai';
import PostCard from '@components/layout/PostCard/PostCard';
import Button from '@components/forms/Button/Button';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiApollographql,
} from 'react-icons/si';
import TechIcon from '@components/layout/TechIcon/TechIcon';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <main className={classes.home}>
      <header className={classes.home__header}>
        <div className={classes.home__intro}>
          <div className={classes.home__icon}>
            <span className={classes.rectangle}></span>
            <span className={classes.circle}></span>
          </div>
          <h1 className={classes['home__intro-name']}>Hi, I am Imran</h1>
          <h3 className={classes['home__intro-field']}>
            Fullstack React/Next developer
          </h3>
          <p className={classes['home__intro-info']}>
            I collaborate and help multi-level companies to visualize their
            ideas to valuable experience through icon, interface, motion and
            architecture.
          </p>
        </div>
        <div className={classes['home__important-links']}>
          <Link href="/resume" className={classes.home__link}>
            <span className={classes['home__link-content']}>
              <AiOutlineMail /> Get in touch
            </span>
          </Link>
          <Link href="/resume" className={classes.home__link}>
            <span className={classes['home__link-content']}>
              <AiOutlineProfile /> My Resume
            </span>
          </Link>
          <Link href="/resume" className={classes.home__link}>
            <span className={classes['home__link-content']}>
              <AiOutlineLaptop /> View my work
            </span>
          </Link>
        </div>
      </header>
      <section className={classes['home__more-on-experience']}>
        <div className={classes.home__contact}>
          <p className={classes.home__location}>
            Working world-wide from Lagos, Nigeria.
          </p>
          <Link href="/resume">
            <span className={classes['home__book-call']}>
              <AiOutlinePhone /> Book A Call
            </span>
          </Link>
        </div>
        <div className={classes.home__journey}>
          <p>
            Since 2016, I have experiences to work with remote and on-site work
            environment. Most of them even have 12hrs time differences. Time
            doesn't stop us to make great collaboration. Let's brainstorm some
            ideas!
          </p>
        </div>
      </section>
      <section className={classes['home__familiar-techs']}>
        <h2 className="heading__secondary mb-med">
          Birds-eye view of the technologies I use on a regular basis
        </h2>
        <div className={classes['home__tech-icons']}>
          <span className={classes['home__frontend-icons']}>
            <p className={classes['home__tech-icons-label']}>Frontend Techs</p>
            <TechIcon Icon={FaHtml5} name="HTML 5" />
            <TechIcon Icon={FaCss3Alt} name="CSS 3" />
            <TechIcon Icon={SiJavascript} name="Javascript" />
            <TechIcon Icon={FaReact} name="React JS" />
            <TechIcon Icon={SiNextdotjs} name="Next JS" />
            <TechIcon Icon={SiApollographql} name="Apollo" />
          </span>
          <span className={classes['home__backend-icons']}>
            <p className={classes['home__tech-icons-label']}>Backend Techs</p>
            <TechIcon Icon={FaNodeJs} name="Node Js" />
            <TechIcon Icon={SiExpress} name="Express Js" />
            <TechIcon Icon={SiMongodb} name="Mongo DB" />
            <TechIcon Icon={SiFirebase} name="Firebase" />
            <TechIcon Icon={SiGraphql} name="Graph QL" />
            <TechIcon Icon={FaGithub} name="Github" />
          </span>
        </div>
      </section>
      <section className={classes.home__projects}>
        <h2 className="heading__secondary mb-med">Some of my work</h2>
        <div className={classes['home__projects-links']}>
          <span>Twillo</span>
          <span>Natours</span>
        </div>
      </section>
      <section className={classes.home__blog}>
        <h2 className="heading__secondary mb-med">Some of my posts</h2>
        <ul className={classes['home__blog-wrapper']}>
          <PostCard
            postImage="sample.jpg"
            category="Technology"
            title="First Blog title"
            content="This is first blog content"
            date="10th Nov, 2021"
            author={{ name: 'Imran Great', image: 'imran-profile.jpg' }}
          />

          <PostCard
            postImage="sample.jpg"
            category="Food"
            title="Second Blog title"
            content="This is second blog content"
            date="15th Nov, 2021"
            author={{ name: 'Jamila Bello', image: 'jprofile.jpg' }}
          />

          <PostCard
            postImage="sample.jpg"
            category="Technology"
            title="Third Blog title"
            content="This is third blog content"
            date="31th Nov, 2021"
            author={{ name: 'Imran Great', image: 'imran-profile.jpg' }}
          />

          <PostCard
            postImage="sample.jpg"
            category="Lifestyle"
            title="Fourth Blog title"
            content="This is fourth blog content"
            date="2th Dec, 2021"
            author={{ name: 'Imran Great', image: 'imran-profile.jpg' }}
          />
        </ul>
        <Button href="/resume">View more posts</Button>
      </section>
    </main>
  );
};

export default Home;
