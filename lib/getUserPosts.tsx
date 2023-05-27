import React from 'react'

export default async function getUserPost(surahId: string) {
    const res = await fetch (`https://equran.id/api/v2/post?surahId=${surahId}`)
    if (!res.ok) throw new Error('Failed')
  return res.json()
}
