import React from 'react'
import { Avatar, Box, Stack } from '@mui/material'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import kasadam from '../public/kasadam.jpg'
import { useNavigate } from 'react-router-dom';



export default function Recommendations() {
    const navigate = useNavigate()
    return (
        <Stack mt={7} alignItems={"center"} pl={1} justifyContent={"center"} direction={"column"} width={"350px"} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>

            <Box>
                <Box mb={1} sx={{ width: "100%" }} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                    <Box gap={1} display={"flex"}>
                        <Box>
                            <h4><Avatar src={kasadam} /></h4>
                        </Box>
                        <Box pt={1}>
                            Burak Sağır
                        </Box>
                    </Box>
                    <Box >
                        <ExitToAppIcon onClick={() => (navigate("/auth"))} />
                    </Box>
                </Box>
            </Box>

            <h4>Sizin için önerilenler</h4>
            {/**First Rec */}

            <Box mb={1} mt={1} sx={{ width: "100%" }} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <Box gap={1} display={"flex"}>
                    <Box>
                        <h4><Avatar /></h4>
                    </Box>
                    <Box pt={1}>
                        Ali Hoca
                    </Box>
                </Box>
                <Box >
                    <ClearRoundedIcon />
                </Box>
            </Box>
            {/**Second Rec */}

            <Box mb={1} mt={1} sx={{ width: "100%" }} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <Box gap={1} display={"flex"}>
                    <Box>
                        <h4><Avatar /></h4>
                    </Box>
                    <Box pt={1}>
                        Hoca Ali
                    </Box>
                </Box>
                <Box >
                    <ClearRoundedIcon />
                </Box>
            </Box>

            {/**Third */}

            <Box mb={1} mt={1} sx={{ width: "100%" }} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <Box gap={1} display={"flex"}>
                    <Box>
                        <h4><Avatar /></h4>
                    </Box>
                    <Box pt={1}>
                        Mike Tyson
                    </Box>
                </Box>
                <Box >
                    <ClearRoundedIcon />
                </Box>
            </Box>
        </Stack>
    )
}
