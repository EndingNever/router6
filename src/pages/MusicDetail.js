import React from 'react'
import { useParams } from 'react-router-dom'

export default function MusicDetail() {
  const params = useParams();

  console.log(params.musicId);

  return (
    <div>{params.musicId}</div>
  )
}
