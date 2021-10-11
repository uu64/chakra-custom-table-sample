import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ChakraProvider,
  Container,
  Box,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const appName = "chakra custom table sample";
  return (
    <ChakraProvider>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appName} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minW="container.lg">
        <Stack>
          <Heading py={8} as="h1" size="md">
            {appName}
          </Heading>
          <Box>
            <Component {...pageProps} />
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
