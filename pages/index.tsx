import React, {FC} from 'react'
import Head from 'next/head'

const Home: FC = () => {
  return (
    <div className="">
      <Head>
        <title>neet.club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center h-screen bg-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-10 max-w-screen-lg">
          <img className="w-5/12 md:w-8/12 rounded-full mx-auto" src="https://github.com/JohnTitor.png" alt="avatar"/>
          <div className="mx-auto">
            <h2 className="text-3xl text-gray-100 mx-auto">Yuki Okushi</h2>
            <p className="text-2xl text-gray-300 mx-auto">FLOSS nerd, Rustacean</p>
            <p className="text-xl text-gray-100 mx-auto my-10">About me: ニートです。Rustチームやコミュニティで色々やっています。暮らせなくなるので性急に一人暮らしできる程度のお賃金で雇ってくれるところを探しています。労働環境の優劣は問いません。</p>
            <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded my-10"><a href="https://github.com/JohnTitor" target="_blank" rel="noopener noreferer">GitHub</a></button>
            <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded my-10 mx-4"><a href="mailto:huyuumi@neet.club">Contact (E-mail)</a></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
