import React, { useState } from 'react'
import { HttpClient } from '../../httpClient'
import { Button, TextField } from '@material-ui/core'
import { SearchResult } from './SearchResult'
import { World } from '../../model/World'

const BASE_URL = 'react-sample-app/api/v1/world'

export const WorldSearch: React.FC = () => {
  const [searchString, setSearchString] = useState('')
  const [searchResults, setSearchResults] = useState<Array<World>>([])

  const handleSearchButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    const result = await new HttpClient(BASE_URL).get<World>(`/${searchString}`)
    setSearchResults([result])
  }

  return (
    <div>
      <TextField
        id="standard-search"
        label="国コード"
        type="search"
        onChange={(event) => setSearchString(event.target.value)}
      />
      <Button
        variant="contained"
        disabled={!searchString}
        onClick={(event) => handleSearchButton(event)}
      >
        検索
      </Button>
      {searchResults && <SearchResult worlds={searchResults} />}
    </div>
  )
}
