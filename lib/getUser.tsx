import React from 'react'

export default async function getUser(surahId: string) {
    const res = await fetch (`https://equran.id/api/v2/surat/${surahId}`)
    if (!res.ok) throw new Error('Failed')
  return res.json()
}
