import { UserContext, SnackbarContext } from "./usercontext";
import { useContext } from "react";
import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { CardN } from "./Card";
import CustomizedSnackbars from "./snack";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export function BodyData() {
  const { userprofile, setUserProfile } = useContext(UserContext);
  const { snack, setSnack } = useContext(SnackbarContext);

  return (
    <Container>
          <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
        risus interdum, posuere orci ullamcorper, maximus diam. Vestibulum
        malesuada ligula vitae ipsum suscipit, non sollicitudin lacus dignissim.
        Mauris sollicitudin mollis luctus. Aliquam erat volutpat. Integer a
        metus tincidunt, interdum ante et, iaculis lorem. Fusce id sem at diam
        scelerisque placerat. Vivamus eget sem turpis. Aliquam luctus
        condimentum massa vel vestibulum. Vivamus accumsan id augue a fermentum.
        Nam at commodo nisi. Vestibulum elit quam, porttitor nec erat nec,
        semper tempor est. Duis sed enim mattis, commodo ante eu, mattis erat.
        Nullam id tincidunt justo. Vestibulum a augue eget velit cursus congue.
        Aliquam malesuada mauris sem, elementum elementum mauris condimentum in.
        Praesent ultricies, lacus sed iaculis gravida, libero est aliquam erat,
        in tempus ante nunc vitae quam. Sed bibendum augue sit amet dignissim
        pulvinar. Etiam ut mi sem. Vivamus non aliquam elit, nec semper urna.
        Maecenas ornare tortor sem, eu scelerisque augue tristique vel. Integer
        vehicula sed ligula dignissim scelerisque. Aliquam efficitur facilisis
        nisi a porta. Quisque a est sem. Nunc ornare sem ut fringilla
        consectetur. Donec posuere euismod magna, vel feugiat urna laoreet
        vitae. Vivamus ultrices diam eget dapibus egestas. Vivamus sed volutpat
        nisl, sed elementum erat. Nullam non nunc at metus faucibus accumsan.
        Donec ut venenatis elit. Etiam quis tortor vel arcu commodo dapibus vel
        a elit. Vivamus sed neque luctus felis faucibus bibendum. Proin
        porttitor diam rutrum gravida auctor. Ut porttitor vel odio eget
        scelerisque. Morbi vel convallis diam. Etiam a scelerisque ligula. In
        lacinia at arcu vel rhoncus. Sed maximus pellentesque euismod. Integer
        congue, odio sed tincidunt viverra, mauris dui suscipit dui, id
        scelerisque dolor sem et sapien. Aliquam ac feugiat turpis. Curabitur
        volutpat, dui vitae interdum tincidunt, risus sem porta ante, at lacinia
        lacus justo sit amet velit. Donec ultrices eros id metus luctus auctor.
        Donec quis dapibus sem. Nunc tortor dui, laoreet in sagittis id, egestas
        ut dui. Etiam gravida pulvinar suscipit. Aenean nec luctus diam. Integer
        molestie lacus et libero porta, sit amet auctor dui lobortis. Aenean
        commodo varius dui, et vehicuorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus vitae risus interdum, posuere orci ullamcorper,
        maximus diam. Vestibulum malesuada ligula vitae ipsum suscipit, non
        sollicitudin lacus dignissim. Mauris sollicitudin mollis luctus. Aliquam
        erat volutpat. Integer a metus tincidunt, interdum ante et, iaculis
        lorem. Fusce id sem at diam scelerisque placerat. Vivamus eget sem
        turpis. Aliquam luctus condimentum massa vel vestibulum. Vivamus
        accumsan id augue a fermentum. Nam at commodo nisi. Vestibulum elit
        quam, porttitor nec erat nec, semper tempor est. Duis sed enim mattis,
        commodo ante eu, mattis erat. Nullam id tincidunt justo. Vestibulum a
        augue eget velit cursus congue. Aliquam malesuada mauris sem, elementum
        elementum mauris condimentum in. Praesent ultricies, lacus sed iaculis
        gravida, libero est aliquam erat, in tempus ante nunc vitae quam. Sed
        bibendum augue sit amet dignissim pulvinar. Etiam ut mi sem. Vivamus non
        aliquam elit, nec semper urna. Maecenas ornare tortor sem, eu
        scelerisque augue tristique vel. Integer vehicula sed ligula dignissim
        scelerisque. Aliquam efficitur facilisis nisi a porta. Quisque a est
        sem. Nunc ornare sem ut fringilla consectetur. Donec posuere euismod
        magna, vel feugiat urna laoreet vitae. Vivamus ultrices diam eget
        dapibus egestas. Vivamus sed volutpat nisl, sed elementum erat. Nullam
        non nunc at metus faucibus accumsan. Donec ut venenatis elit. Etiam quis
        tortor vel arcu commodo dapibus vel a elit. Vivamus sed neque luctus
        felis faucibus bibendum. Proin porttitor diam rutrum gravida auctor. Ut
        porttitor vel odio eget scelerisque. Morbi vel convallis diam. Etiam a
        scelerisque ligula. In lacinia at arcu vel rhoncus. Sed maximus
        pellentesque euismod. Integer congue, odio sed tincidunt viverra, mauris
        dui suscipit dui, id scelerisque dolor sem et sapien. Aliquam ac feugiat
        turpis. Curabitur volutpat, dui vitae interdum tincidunt, risus sem
        porta ante, at lacinia lacus justo sit amet velit. Donec ultrices eros
        id metus luctus auctor. Donec quis dapibus sem. Nunc tortor dui, laoreet
        in sagittis id, egestas ut dui. Etiam gravida pulvinar suscipit. Aenean
        nec luctus diam. Integer molestie lacus et libero porta, sit amet auctor
        dui lobortis. Aenean commodo varius dui, et vehicula enim vulputate at.
        Duis risus ipsum, sodales id tincidunt non, venenatis vitae nunc. Aenean
        gravida tristique aliquet. Nunc nec urna lacus. Etiam egestas lacus ac
        fringilla commodo. Cras ornare nunc quis sem consequat, hendrerit auctor
        libero imperdiet.orem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus vitae risus interdum, posuere orci ullamcorper, maximus diam.
        Vestibulum malesuada ligula vitae ipsum suscipit, non sollicitudin lacus
        dignissim. Mauris sollicitudin mollis luctus. Aliquam erat volutpat.
        Integer a metus tincidunt, interdum ante et, iaculis lorem. Fusce id sem
        at diam scelerisque placerat. Vivamus eget sem turpis. Aliquam luctus
        condimentum massa vel vestibulum. Vivamus accumsan id augue a fermentum.
        Nam at commodo nisi. Vestibulum elit quam, porttitor nec erat nec,
        semper tempor est. Duis sed enim mattis, commodo ante eu, mattis erat.
        Nullam id tincidunt justo. Vestibulum a augue eget velit cursus congue.
        Aliquam malesuada mauris sem, elementum elementum mauris condimentum in.
        Praesent ultricies, lacus sed iaculis gravida, libero est aliquam erat,
        in tempus ante nunc vitae quam. Sed bibendum augue sit amet dignissim
        pulvinar. Etiam ut mi sem. Vivamus non aliquam elit, nec semper urna.
        Maecenas ornare tortor sem, eu scelerisque augue tristique vel. Integer
        vehicula sed ligula dignissim scelerisque. Aliquam efficitur facilisis
        nisi a porta. Quisque a est sem. Nunc ornare sem ut fringilla
        consectetur. Donec posuere euismod magna, vel feugiat urna laoreet
        vitae. Vivamus ultrices diam eget dapibus egestas. Vivamus sed volutpat
        nisl, sed elementum erat. Nullam non nunc at metus faucibus accumsan.
        Donec ut venenatis elit. Etiam quis tortor vel arcu commodo dapibus vel
        a elit. Vivamus sed neque luctus felis faucibus bibendum. Proin
        porttitor diam rutrum gravida auctor. Ut porttitor vel odio eget
        scelerisque. Morbi vel convallis diam. Etiam a scelerisque ligula. In
        lacinia at arcu vel rhoncus. Sed maximus pellentesque euismod. Integer
        congue, odio sed tincidunt viverra, mauris dui suscipit dui, id
        scelerisque dolor sem et sapien. Aliquam ac feugiat turpis. Curabitur
        volutpat, dui vitae interdum tincidunt, risus sem porta ante, at lacinia
        lacus justo sit amet velit. Donec ultrices eros id metus luctus auctor.
        Donec quis dapibus sem. Nunc tortor dui, laoreet in sagittis id, egestas
        ut dui. Etiam gravida pulvinar suscipit. Aenean nec luctus diam. Integer
        molestie lacus et libero porta, sit amet auctor dui lobortis. Aenean
        commodo varius dui, et vehicula enim vulputate at. Duis risus ipsum,
        sodales id tincidunt non, venenatis vitae nunc. Aenean gravida tristique
        aliquet. Nunc nec urna lacus. Etiam egestas lacus ac fringilla commodo.
        Cras ornare nunc quis sem consequat, hendrerit auctor libero
        imperdiet.la enim vulputate at. Duis risus ipsum, sodales id tincidunt
        non, venenatis vitae nunc. Aenean gravida tristique aliquet. Nunc nec
        urna lacus. Etiam egestas lacus ac fringilla commodo. Cras ornare nunc
        quis sem consequat, hendrerit auctor libero imperdiet.
      </p>
      <div className="nayudu">
        <Link to="/signup">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp; */}
        <Link to="/form">Form Data</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/card">Cards</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/upload">File Upload</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/signin">SIGN IN </Link>&nbsp;&nbsp;&nbsp;
        {userprofile && <Link to="/signout">logout </Link>}
        <CustomizedSnackbars />
        <br />
        {userprofile && (
          <p>
            By clicking any of the botton cards will take you to <b>Arawinz</b>{" "}
            Website
          </p>
        )}
        {userprofile && (
          <CardN
            data={[
              { name: "Name 1", mobile: 9000000001, address: "Address 1" },
              { name: "Name 2", mobile: 9000000002, address: "Address 2" },
              { name: "Name 3", mobile: 9000000003, address: "Address 3" },
              { name: "Name 4", mobile: 9000000004, address: "Address 4" },
              { name: "Name 5", mobile: 9000000005, address: "Address 5" },
            ]}
          />
        )}
      </div>{" "}
  
    </Container>
  );
}
