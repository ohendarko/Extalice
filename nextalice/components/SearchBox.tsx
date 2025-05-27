'use client'

import React, { useState } from 'react'
import styles from '@/app/styles/header.module.css'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import blogPosts from '@/assets/sample-blog'
import Link from 'next/link'

const SearchBox = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className={styles.search}>
          <Input
            type="text"
            placeholder="Search"
            className={styles.searchBox}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
							// setOpen(true);
            }}
						onFocus={() => setOpen(true)}
  					onBlur={() => setTimeout(() => setOpen(false), 150)}
						
          />
          <button aria-label="Search" className={styles.searchButton}>
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
              <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
            </svg>
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 bg-white">
        <Command>
          <CommandGroup heading="Blog Posts">
            {filteredPosts.length > 0 ? (
              filteredPosts.slice(0, 3).map((post, index) => (
                <CommandItem key={index}>
                  <Link
										href={`/blogs/${post.id}`}
										className="w-full"
										onMouseDown={(e) => {e.preventDefault(); }}
									>
                    {post.title}
                  </Link>
                </CommandItem>
              ))
            ) : (
              <CommandItem disabled>No results found.</CommandItem>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default SearchBox
