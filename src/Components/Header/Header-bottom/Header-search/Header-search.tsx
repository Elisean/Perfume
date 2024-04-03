import { useState, useEffect, useRef } from "react"
import { styled } from "styled-components"
import { MainContainer } from "../../../../Containers/Main-container/Main-container"
import SearchIconOpen from '../../../../icons/search.svg'
import { MainForm } from "../../../Main-Form/Main-Form"
import { Input } from "../../../Input/Input"
import { ReactComponent as Search } from '../../../../icons/search.svg';
import { Link } from "react-router-dom"
import { ROUTES } from "../../../../Utils/routes"


const FormContainerStyled = styled.div`
    position: relative;
    
    .search-icon{
        display: none;
    }
    .icon-closed{
        display: none;
    } 
   
    .search-results{
        position:absolute;
        top:65px;
        left:0;
        z-index:10;
        background-color: var(--bg-color);
        height:auto;
        max-height:705px;
        overflow: auto;
        width:100%;
    }
    ::-webkit-scrollbar{
        width: 16px;
    }
    ::-webkit-scrollbar-track{
        border-radius: 6px;
        background: #1D1A19;
            
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 6px;
        background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
        border:3px solid #1D1A19;
    }
    .product-link{
        display:flex;
        padding:10px;
        align-items:center;
        transition:0.3s all;
    }
    .product-link:hover{
      background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
      -webkit-text-fill-color: #36332E;
      transition:0.3s all;
    }
    .product-image{
        width:50px;
        height:50px;
        margin:0 10px 0 0;
    }
    .product-title{
        text-align:left;
        flex:0 1 54%;
    }
    .product-type{
        flex:0 1 31%;
        text-align:left;
    }

    @media (max-width:1300px) {

        .search-results{
            word-wrap:wrap;
        }
        .product-title{
            text-align:left;
            flex:0 1 55%;
        }
        .product-price{
            flex:0 1 15%;
        }
        .product-title{
            margin:0 20px 0 0;
        }
        
    }
    @media (max-width:993px) {
        .product-title{
            text-align:left;
            flex:0 1 72%;
            margin:0 5px 0 0;
        }
        .product-type{
            display:none;
        }
        .product-price{
            flex:0 1 28%;
        }
    }
    @media (max-width: 768px) {
        .search-icon{
            display: block;
            position: absolute;
            top: -10px;
            left:40px;
            z-index:3;
        }
        .search-open{
            position: fixed;
            top: -5px;
            left: 50%;
            transform: translate(-50%, 25px);
            width:90%;
            z-index:3;
        }
        .search-closed{
            position: fixed;
            top: -1000%;
            width:90%;
            left: 50%;
            transform: translate(-50%, 25px);
        }
        .icon-open{
            position: absolute;
            top: 200%;
            font-size:40px;
            font-weight:600;
            z-index:4;
        }
        .icon-closed{
            position: absolute;
            top: -100%;
            font-size:40px;
            font-weight:600;
            z-index:4;  
        }
        .form-bg{
            display: flex;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            min-height:92px;
            background-color: var(--gray);
            z-index:3;
            transition: .3s;
        }
        .form-bg::after{
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            min-height:100vh;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        .form-bg-closed{
            content: '';
            position: fixed;
            top: -100%;
            left: 0;
            width:100%;
            min-height:100%;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        .form-bg-closed:after{
            content: '';
            position: fixed;
            top: -100%;
            left: 0;
            width:100%;
            min-height:100%;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
    }
    @media (max-width:420px) {
        .search-results{
            font-size:13px;
        }
    }

`


export const HeaderSearch:React.FC = () =>{
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [openSearch, setOpenSearch] = useState(false);

    const body = document.body;
    const boxRef = useRef<HTMLDivElement>(null)

    openSearch ? body.classList.add('overflow') : body.classList.remove('overflow');

    const handleClosed = (event:any) =>{
        if(boxRef.current && boxRef.current.contains(event.target)){
            setOpenSearch(openSearch)
        }
    }
    
    useEffect(() =>{
        document.addEventListener('mousedown', handleClosed)
    }, [])

   
    const fetchData = (value:string) =>{
        fetch(
            `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?`
          )
          .then((res) => res.json())
          .then((data) => {
            const results = data.filter((product:any)=> {
                return(
                    product.title &&
                    product.title.toLowerCase().includes(value)
                ) 
            });
            setResults(results);
            
           });  
          
    }

    const handleChange = (value:string) =>{
        setInput(value);
        fetchData(value);
    }
  

    return(
        <MainContainer>
        <FormContainerStyled>
            <div className="search-icon" onClick={() => setOpenSearch(!openSearch)}>
                <img src={SearchIconOpen} alt="icon-search" />
            </div>
            <div ref={boxRef} className={openSearch ? 'form-bg' : 'form-bg-closed'}>
                <div className={openSearch ? 'icon-open' : 'icon-closed'} onClick={() => setOpenSearch(openSearch)}>x</div>
            </div>

            <div className={openSearch ? 'search-open' : 'search-closed'}>
                <MainForm action={'#'}>
                    <Input 
                        type="search"
                        autocomplete="off" 
                        className="form-input" 
                        placeholder="Найти парфюм.." 
                        value={input} 
                        onChange={(event:React.ChangeEvent<HTMLInputElement>)=> handleChange(event.target.value)}/>
                    <button type="button" className="form-btn-search"><Search/></button>
                </MainForm>
                <div className="search-results">
                    {
                     input && results.map((result:any, index:number)=>{
                            return <Link className="product-link" to={ROUTES.HOME + ROUTES.SINGLEPRODUCT + `${result.id}`} key={index}>
                                 <img className="product-image" src={result.url} alt="product-img" />
                                 <h2 className="product-title">{result.title}</h2> 
                                 <h3 className="product-type">{result.type}</h3>
                                 <h4 className="product-price">{result.price + ' ' + '₽'} </h4>
                                </Link>     
                        })
                    }
                </div>
            </div>
        </FormContainerStyled>
        </MainContainer>
    )
}

