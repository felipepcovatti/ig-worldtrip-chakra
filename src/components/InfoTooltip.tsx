import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import { useBreakpointValue } from "@chakra-ui/react";
import { theme } from "../styles/theme";

interface InfoTooltipProps {
  children: string
}

export function InfoTooltip({ children }: InfoTooltipProps) {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Popover trigger={isLargeScreen ? 'hover' : 'click'}>
      <PopoverTrigger>
        <InfoOutlineIcon
          aria-label="More information"
          ml={{ base: '6px', lg: '8px' }}
          mb={{ base: '2px', lg: '6px' }}
          color={theme.colors.grey[500]}
          fontSize={{ base: 'sm', lg: 'md' }}
          opacity="0.5"
        />
      </PopoverTrigger>
      <PopoverContent
        bgColor={theme.colors.gray[700]}
        color={theme.colors.gray[100]}
      >
        <PopoverBody>
          {children}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}