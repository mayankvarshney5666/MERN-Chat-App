import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <div className="m-full">

        <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent h="430px">
            <ModalHeader
              fontSize="30px"
              fontFamily="Work sans"
              d="flex"
              justifyContent="center"
            >
              {user.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              d="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                borderRadius="full"
                boxSize="130px"
                // marginBottom={"10px"}
                src={user.pic}
                alt={user.name}
              />
              <Text
                // marginBottom={"-5px"}
                fontSize={{ base: "25px", md: "25px" }}
                fontFamily="Work sans"
                text-align={"center"}
              >
                Email: {user.email}
              </Text>
              <Text
                fontSize={{ base: "25px", md: "25px" }}
                fontFamily="Work sans"
              >
                Mobile Number : {user.mobileNumber}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal >
      </div>
    </>
  );
};

export default ProfileModal;
