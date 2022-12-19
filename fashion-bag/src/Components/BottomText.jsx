import {Box,Flex,Text,Center,Link, background} from "@chakra-ui/react";


const BottomText=()=>{

    return(
<>
<Box w="79%" m="auto" mt="10">
<Center><Text fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize="18px" >MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</Text></Center>
<Center mt="5">
<Text textAlign="left">
Mytheresa is the most-trusted source for finding the finest selection of luxurious womenswear. Our expert buying team travels the globe with a simple mission: to bring international fashion’s finest directly to your doorstep. With our runway-fresh new arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we ensure a boutique-like feeling for a unique shopping experience.
</Text>
</Center>
<Flex justifyContent="space-between" mt="10" textAlign="left">
<Box w="45%">
<Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontSize="18px">A LUXURY SHOPPING EXPERIENCE</Text>
<Box ml="5" fontFamily="Arial, Helvetica, sans-serif" fontSize="14px">
<ul>
<li>The finest edit of more than 200 international luxury brands</li>
<li>900 new arrivals each week directly from the runway</li>
<li>Well-curated selection of items for a boutique-like shopping experience</li>
<li>Exclusive designer collaborations and capsule collections that you won't find anywhere else </li>
</ul>
</Box>
</Box>
<Box w="45%">
<Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontSize="18px">SERVICE AND QUALITY</Text>
<Box ml="5" fontFamily="Arial, Helvetica, sans-serif" fontSize="14px">
<ul>
<li>Authentic products guaranteed</li>
<li>Fast, reliable delivery within 3 business days</li>
<li>Free returns and exchanges within 30 days</li>
<li>Exceptional customer service available 24 hours a day, 7 days a week in 13 different languages </li>
</ul>
</Box>

</Box>
</Flex>
<Box textAlign="left" mt="5" fontFamily="Arial, Helvetica, sans-serif" fontSize="14px">
<Text  >
Whether you are looking for the latest <Link href='https://www.mytheresa.com/int_en/designers/bottega-veneta.html' isExternal textDecoration="underline">Bottega Veneta</Link> pouch for everyday wear, 
<Link href="https://www.mytheresa.com/int_en/sl/jimmy-choo-heels.html"  isExternal textDecoration="underline">Jimmy Choo heels</Link> for an upcoming wedding, or a Burberry scarf to gift a friend, 
our edit comprises the key pieces that you need for an elegant season ahead. 
With our assortment of timeless items and exclusive capsule collections, 
which includes everything from the understated luxury of <Link href="https://www.mytheresa.com/int_en/designers/loro-piana.html" isExternal textDecoration="underline">Loro Piana</Link> and avant-garde 
appeal of <Link href="https://www.mytheresa.com/int_en/designers/maison-margiela.html" textDecoration="underline" isExternal>Maison Margiela</Link>, to <Link href="https://www.mytheresa.com/int_en/designers/saint-laurent/bags.html" isExternal textDecoration="underline">Saint Laurent bags</Link> and time-honored Gucci loafers;
 you are certain to find everything you want to build your dream closet.
</Text>
<Text mt="5">
Get inspired by our coveted edit, which makes occasion dressing easy by breaking down 
our buy into easy-to-shop categories such as <Link href="https://www.mytheresa.com/int_en/shoes/sneakers.html" isExternal textDecoration="underline">fashion sneakers</Link> or exquisite <Link href="https://www.mytheresa.com/int_en/clothing/dresses/gowns.html" isExternal textDecoration="underline">gowns</Link>. 
Delve into our exclusive selection of <Link href="https://www.mytheresa.com/int_en/sl.html" isExternal textDecoration="underline">designer-must-haves</Link>. Our exceptional customer service team is 
here to help you through every step of the order process, 
and beyond, to make sure you start every day dressed to conquer.
</Text>
<Text mt="5">
Shop with us and discover why Mytheresa is your final destination for online shopping for women.
</Text>
</Box>
<Box mt="5"><hr style={{width:"100%" }} /></Box>

</Box>

</>

    )

}
export default BottomText;