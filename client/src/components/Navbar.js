<AppBar
  position="static"
  elevation={0}
  sx={{ background: "transparent", color: "#000", px: 4 }}
>
  <Toolbar>

    <Typography
      variant="h6"
      onClick={() => navigate("/")}
      sx={{ cursor: "pointer", fontWeight: 600 }}
    >
      Zvertex3D
    </Typography>

    <Box sx={{ marginLeft: "auto", display: "flex", gap: 3 }}>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/marketplace")}>Marketplace</Button>
      <Button onClick={() => navigate("/services")}>Services</Button>
      <Button onClick={() => navigate("/vendor-register")}>Register</Button>

      <Button
        variant="contained"
        sx={{
          background: "#5B6E3A",
          borderRadius: "20px",
          px: 3
        }}
      >
        Learn More
      </Button>
    </Box>

  </Toolbar>
</AppBar>