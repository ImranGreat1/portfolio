import classes from './PostCard.module.css';
import Link from 'next/link';
import Button from '@components/forms/Button/Button';

const PostCard = (props) => {
  const { category, title, content, date, author } = props;

  return (
    <li className={classes['post']}>
      <div className={classes['post__image-container']}>
        <img
          src="/sample.jpg"
          alt="Post Image"
          className={classes.post__image}
        />
      </div>
      <main className={classes['post__main']}>
        <div>
          <small
            className={`${classes['post__category']} ${classes[category]}`}
          >
            {category}
          </small>
        </div>
        <h3 className={classes['post__title']}>{title}</h3>
        <p className={classes['post__content']}>
          {content} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quis beatae error dolorum.
        </p>
        <span className={classes['post__meta-data']}>
          <span className={classes['post__author-img-container']}>
            <img
              src="/developer.jpg"
              alt=""
              className={classes['post__author-img']}
            />
          </span>
          <span className={classes['post__name-and-date-container']}>
            <small className={classes['post__author-name']}>
              {author.name}
            </small>
            <small className={classes['post__date']}>{date}</small>
          </span>
          <span className={classes.post__cta}>
            <Button href="/resume">Read</Button>
          </span>
        </span>
      </main>
    </li>
  );
};

export default PostCard;
