'use server'

const Page = async () => {
  const res = await fetch("http://localhost:3001/test", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }

  const data = await res.json()

  return <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
}

export default Page
