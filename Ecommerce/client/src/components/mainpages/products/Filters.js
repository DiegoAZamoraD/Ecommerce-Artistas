import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filtrar : </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Todos los productos</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Buscar!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Odenar por: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Recientes</option>
                    <option value='sort=oldest'>Antiguos</option>
                    <option value='sort=-sold'>Los mas vendidos</option>
                    <option value='sort=-price'>Precio más alto</option>
                    <option value='sort=price'>Precio más bajo</option>
                </select>
            </div>
        </div>
    )
}

export default Filters