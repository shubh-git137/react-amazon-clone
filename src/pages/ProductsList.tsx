import ProductCard from "../components/ProductCard"
import card2 from "../assets/card2.jpg"

const ProductsList = () => {
  return (
    <div className="m-2 flex flex-wrap gap-3 bg-white">
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
      <ProductCard title={"Product 1"} image={card2} price={100} ratings={4.5} bought="1k+ users bought in past months" delivery={"Tommorrow Morning 9 AM"}/>
    </div>
  )
}

export default ProductsList
