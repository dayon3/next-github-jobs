import Head from "next/head"
import { useState } from "react"
import { Box, Heading, Spinner } from "@chakra-ui/react"
import useFetchJobs from "../hooks/useFetchJobs"
import Job from "../components/Job"
import styles from "../styles/Home.module.css"
import JobsPagination from "../components/JobsPagination"
import SearchForm from "../components/SearchForm"

export default function Home() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams((prevParams) => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Box className={styles.container}>
      <Head>
        <title>GitHub Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="d-flex flex-column justify-content-start mt-4 bg-primary w-100 p-2 rounded position-sticky shadow">
        <Heading color="white" pl="2">
          GitHub Jobs
        </Heading>
      </header>

      <main className={styles.main}>
        {!loading && (
          <SearchForm params={params} onParamChange={handleParamChange} />
        )}
        {!loading && (
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        )}
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {error && <h1 className={styles.title}>Error. Try Refreshing.</h1>}
        {jobs.map((job) => {
          return <Job className={styles.card} key={job.id} job={job} />
        })}
        {!loading && (
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Box>
  )
}
