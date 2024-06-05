import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import DarkTitle from '@/app/ui/components/titles/DarkTitle';
import IndexCard from '@/app/ui/components/cards/players/IndexCard';



export default function Page() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <div>
                        <DarkTitle text = {'Eventos'}/>
                    </div>

                    <div>
                        <Link href='/dashboard/events/newgame'>
                            <div>
                                <p>Crear partido</p>
                            </div>
                        </Link>
                    </div>
                </Paper>

            </Grid>
        </Grid>
    );
}