import {
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import ReactMarkdownWithHtml from "react-markdown/with-html"

export default function Job({ job }) {
  const [open, setOpen] = useState(false)

  return (
    <Box
      borderRadius="md"
      marginY={2}
      boxShadow="md"
      border="1px"
      borderColor="gray.200"
      backgroundColor="white"
      w="800px"
      maxW="100%"
      p={{
        base: "2",
        sm: "4",
      }}
    >
      <Box>
        <Flex justify="space-between">
          <Box
            pr={{
              sm: "2em",
              base: "0",
            }}
          >
            <Heading
              as="h1"
              size="sm"
              // bgGradient="linear(to-r, #1d80be,#38A169)"
              // bgClip="text"
              textAlign="left"
            >
              {job.title}
            </Heading>
            <Text color="gray.500" fontSize="xs" marginY={1}>
              {job.company} -{" "}
              <Badge
                textTransform="capitalize"
                variant="outline"
                colorScheme="green"
              >
                {job.type}
              </Badge>
            </Text>
            <Text color="gray.500" fontSize="xs" marginY={1}>
              {new Date(job.created_at).toLocaleDateString()}
            </Text>
            <Badge
              textTransform="capitalize"
              variant="subtle"
              colorScheme="blue"
            >
              {job.location}
            </Badge>
            <Box style={{ wordBreak: "break-word" }}>
              {/* <ReactMarkdown children={job.how_to_apply} /> */}
            </Box>
          </Box>
          <Image
            display={{
              sm: "block",
              base: "none",
            }}
            boxSize={50}
            objectFit="contain"
            src={job.company_logo}
            alt={job.company}
            fallbackSrc="https://via.placeholder.com/50"
          />
        </Flex>
        <Box mt={5}>
          <Button
            onClick={() => {
              setOpen((prevOpen) => !prevOpen)
            }}
            colorScheme="blue"
            size="sm"
          >
            {open ? "Hide" : "View"} Details
          </Button>
        </Box>
        <Collapse in={open} animateOpacity>
          <Box
            p="20px"
            color="gray"
            mt="4"
            bg="gray.50"
            rounded="md"
            shadow="md"
            maxW="800px"
          >
            <ReactMarkdownWithHtml
              children={job.description}
              allowDangerousHtml
            />
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}
