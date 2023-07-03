import { Card, CardContent, Divider, Grid, Skeleton } from "@mui/material";

export default function CharacterSkeleton() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Skeleton variant="rectangular" width="10(em)" height={200} />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item>
              <Skeleton variant="text" width={120} sx={{ fontSize: "2rem" }} />
              <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
            </Grid>
            <Grid item md={4}>
              <Skeleton variant="text" width={50} sx={{ fontSize: "3rem" }} />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </Card>
    </Grid>
  );
}
