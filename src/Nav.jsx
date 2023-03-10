import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCategories } from "./apis"

export const Nav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        getCategories().then((categories) => {
            setCategories(categories)
        });
    },[])


    return (
        <nav>
            <ul className="nav">
                {
                    categories.map((category)=>{
                        return (
                        <Link to={`/reviews?category=${category.slug}`} key={category.slug}>
                        <li>{category.slug}</li>
                        </Link>
                        )
                })
            }
            </ul>
        </nav>
    )
}