"use client"
import { useStore } from '@/lib/useStore'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { account, databases } from '@/appwrite/appwriteconfig'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Pint-Blue',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  const user=useStore(state => state.user);
  const setUser=useStore(state => state.setUser);
  const globalLoading=useStore(state => state.globalLoading);
  const setGlobalLoading=useStore(state => state.setGlobalLoading);
  useEffect(() =>
    {
        (async function()
        {
                try{
                    setGlobalLoading(true)
                    const session=await account.get();
                    console.log(session)
                    setUser({id:session.$id,name:session.name,email:session.email})
                    setGlobalLoading(false)
                    // function to fetch users data and its image preview
                    // first fetch documents whose userid is equal to present user's id
                    // then traverse the list of documents and from every documents imageId, fetch image one by one to get its  href 
                    // combine document data and its corresponding image href in an object and store it in state named gallery
 
                    // databaseSchema
                    // {
                    //   useServerInsertedHTML,
                    //   imageId,
                    //   gradient,
                    //   shadow,
                    //   radius,
                    //   framsGap
                    // }

                    // pseudo code

                    // const response=await databases.listDocuments(variables.APPWRITE_DATABASEID,variables.APPWRITE_COLLECTIONID,[Query.equal('userId',[session.$id])])
                    // for (let i in response)
                    // {
                    //      previewImage(i);
                    // }
                    //function previewImage(i)
                    // {
                    //   const result = storage.getFilePreview(`${variables.APPWRITE_BUCKETID}`, `${i.imageId}`);
                    //   console.log(result); // returns Resource URL as result.href
                        //  const temp={
                        //     gradient:inter.gradient,
                        //     framGap:inter.framGap,
                        //     radius:inter.radius,
                        //     shadow:inter.shadow,
                        //     imageId:inter.imageId
                        //  }
                    //   setGallery([{...temp,imageURI:result}]) 
                    // }
                   
                }catch(err)
                {
                    setGlobalLoading(false)
                    console.log(err)  
                }
                
            }()) 
    },[])
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/pint.png" />
      </head>
      <body className={inter.className + ' bg-secondary text-white'}>{children}</body>
    </html>
  )
}
