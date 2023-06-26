import React from "react";
import Carousel from "../Carousel/Carousel";
import { Flex, Accordion } from "@fluentui/react-northstar";
import { Container } from "./DashboardStyle";

const Dashboard = () => {
  const items = [
    {
      key: 1,
      title: "Learn more about the OECD's vision for the next decade",
      content: ["hasfasfajl"],
    },
  ];
  return (
    <Container>
      <Flex gap="gap.small" column>
        <Carousel />

        <div>
          <h1>Who we are</h1>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            placeat quaerat molestias at deserunt, delectus amet, distinctio,
            magni quod aliquam atque. Ipsam ullam culpa id voluptas? Et optio
            iusto aspernatur. Temporibus atque voluptates praesentium error ea
            fugit tempore explicabo dolor, numquam deserunt ex aperiam,
            quisquam, cumque obcaecati iste! Labore possimus error qui minus
            eveniet perferendis dolorum minima alias quibusdam accusamus?
            Corrupti hic voluptatibus earum libero, minus maxime, commodi
            aspernatur iusto quaerat esse expedita et in. Maiores autem eaque
            dolores perferendis. Assumenda odit unde autem accusantium
            laudantium! Hic dignissimos adipisci aperiam. Magnam, nesciunt ab!
            Sed et quam cum, illum ducimus a aspernatur assumenda minima quos
            minus expedita officia error iste quis molestiae sequi facilis
            inventore officiis. Repudiandae recusandae esse voluptatibus
            provident.
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex sed
          omnis est ipsum deserunt eos illo unde veritatis nesciunt consectetur
          adipisci, laudantium porro error libero quas doloremque animi iusto?
          Eligendi debitis facere non natus, velit vero delectus, minima
          laboriosam eveniet placeat iure soluta quod nisi voluptas optio nihil
          eaque? Velit vero culpa neque facere illo totam, molestiae voluptate
          omnis. Distinctio ad corrupti reiciendis autem! Quos, assumenda nulla
          ipsa alias cum explicabo voluptatibus molestiae? Voluptatum voluptas
          distinctio nemo architecto fugit incidunt, possimus quos, accusantium
          iure sit fuga, a voluptatibus modi. Officia aperiam voluptates numquam
          harum minus nobis veniam atque libero quisquam asperiores. Possimus
          libero iste, accusamus consectetur laudantium a architecto dolorem
          sint itaque aliquam dolores doloremque asperiores aspernatur saepe
          quasi! Veniam deserunt quo sapiente ullam ex accusamus provident earum
          neque? Nesciunt nobis accusantium ex! Nihil, iure deserunt doloribus
          amet quibusdam autem eveniet accusantium ipsam est totam id voluptas
          quod. Magni.
        </div>
        <Accordion panels={items} />
      </Flex>
    </Container>
  );
};
export default Dashboard;
