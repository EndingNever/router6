import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

const NewMusic = () => {
  const params = useParams();
  console.log(params)
  return (
    <Fragment>
      <h1>
        Check out this new music!
      </h1>
      <section>
        <p>featuring:</p>
        <Link to='/MusicDetail/Little-Toby'><p>Little Toby</p></Link>
        <Link to='/MusicDetail/Toby-Keith'><p>Toby Keith</p></Link>
        <Link to='/MusicDetail/Keith-Sutherland'><p>Keith Sutherland</p></Link>
        <p>And Many More!</p>
      </section>
    </Fragment>
  );
}

export default NewMusic;
