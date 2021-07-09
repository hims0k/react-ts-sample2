import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { World } from '../../model/World'

interface WorldRowProps {
  worlds: Array<World>
}

export const SearchResult: React.FC<WorldRowProps> = (props: WorldRowProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="国">
        <TableHead>
          <TableRow>
            <TableCell>コード</TableCell>
            <TableCell>名称</TableCell>
            <TableCell>大陸</TableCell>
            <TableCell align="right">人口</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.worlds.map((world: World) => (
            <TableRow key={world.code}>
              <TableCell component="th" scope="row">
                {world.code}
              </TableCell>
              <TableCell component="th" scope="row">
                {world.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {world.continent}
              </TableCell>
              <TableCell component="th" scope="row">
                {world.population}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
