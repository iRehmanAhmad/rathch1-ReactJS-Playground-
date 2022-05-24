import Book from "./Book"
const Books =[
    {
      title:"Oh, the Places You'll Go!  ",
      author:"Dr. Seuss",
      image:"https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL604_SR604,400_.jpg"
    },
    {
      title:"Where the Crawdads Sing  ",
      author:"Delia Owens",
      image:"https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg"
    },
    {
      title:"It Ends with Us: A Novel (1)  ",
      author:"Colleen Hoover",
      image:"https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL604_SR604,400_.jpg"
    },
  ]

function BookList() {
    return(
        <>
    
        {Books.map((ele) => {
          console.log(ele);
          const {title, author, image} = ele;
          console.log(title);
          return <Book title= {title} author= {author} image= {image}/>
        })
      }
        </>
       )
}

export default BookList