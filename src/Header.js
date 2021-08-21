import Service from './Service';
function Header(props){
  const Services=[
    {
      title:"web development",
      subtitle:"It is all about creating web pages",
      Description:"Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).",
      image:" https://www.whitesourcesoftware.com/wp-content/media/2021/05/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVlMjA1MWQxOWY2NTUuanBnJnZlcnNpb249MDAwMCZzaWc9NGJhMDhmZWU5ZDQ4ZGVjNjcwNzFlNmFhMDg3NzliNzA3D.jpeg"
    },  
    {
        title:"HTML",
        subtitle:"It is all about creating layout",
        Description:"HTML-HYPER TEXT MARKUP LANGUAGE it is a markup Language for creating layouts",
       image:"https://www.whitesourcesoftware.com/wp-content/media/2021/05/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVlMjA1MWQxOWY2NTUuanBnJnZlcnNpb249MDAwMCZzaWc9NGJhMDhmZWU5ZDQ4ZGVjNjcwNzFlNmFhMDg3NzliNzA3D.jpeg"
       } ,
       {
        title:"CSS",
        subtitle:"It is all about Styling",
        Description:"CSS-cascading Style Sheet it is used for making our layout colour full",
       image:"https://www.whitesourcesoftware.com/wp-content/media/2021/05/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVlMjA1MWQxOWY2NTUuanBnJnZlcnNpb249MDAwMCZzaWc9NGJhMDhmZWU5ZDQ4ZGVjNjcwNzFlNmFhMDg3NzliNzA3D.jpeg"
       },
       {
        title:"JavaScript",
        subtitle:"It is all about making decisions",
        Description:"It is the Brain of Webdevelopment , It is a POWERFUL tool .",
       image:"https://www.whitesourcesoftware.com/wp-content/media/2021/05/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVlMjA1MWQxOWY2NTUuanBnJnZlcnNpb249MDAwMCZzaWc9NGJhMDhmZWU5ZDQ4ZGVjNjcwNzFlNmFhMDg3NzliNzA3D.jpeg"
       } ,
       {
        title:"App development",
        subtitle:"It is all about creating apps",
        Description:"Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires.",
       image:"https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png"
       }         
    
]

    return(
      <div >
        <h1 style={{marginLeft:"15%"}}>All Services</h1>
        <div className="container"> 
          {
            Services.map((service,index)=>(<Service key={index} title={service.title} Description={service.Description} image={service.image}/>))
          }
        </div>
      </div>
      
        
    )
}

export default Header;
