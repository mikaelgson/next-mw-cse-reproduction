import { GetStaticProps, GetStaticPaths } from "next"

import { User } from "../../interfaces"
import { sampleUserData } from "../../utils/sample-data"
import Layout from "../../components/Layout"
import ListDetail from "../../components/ListDetail"

type Props = {
  item?: User
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${item ? item.name : "User Detail"} | Next.js + TypeScript Example`}>
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * Bug only appears if paths is empty (no prebuild pages at build time)
   */
  return { paths: [], fallback: "blocking" }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = sampleUserData.find((data) => data.id === Number(id))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item }, revalidate: 10 }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
