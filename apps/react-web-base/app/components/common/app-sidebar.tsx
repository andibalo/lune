"use client"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader
} from "~/components/ui/sidebar"
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "~/components/ui/radio-group"
import { Input } from "~/components/ui/input";

const categoryData = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <h3 className="text-lg font-semibold">
          Filters
        </h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <h4 className="text-md mb-2">Category</h4>
            <div className="flex flex-col gap-2">
              {
                categoryData.map((category) => (
                  <div key={category.id} className="flex items-center gap-2">
                    <Checkbox />
                    <Label htmlFor={category.id} className="text-sm font-medium">
                      {category.label}
                    </Label>
                  </div>
                ))
              }
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <h4 className="text-md mb-2">Rating</h4>
            <div className="flex flex-col gap-2">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">4.0 & Up</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">4.5 & Up</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">5.0</Label>
                </div>
              </RadioGroup>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <h4 className="text-md mb-2">Price</h4>
            <div className="flex flex-col gap-2">
              <Input type="text" placeholder="Min"  />
              <Input type="text" placeholder="Max"  />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <h4 className="text-md mb-2">Minimum Order</h4>
            <div className="flex flex-col gap-2">
              <Input type="text" placeholder="5"  />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 cursor-pointer">Reset Filter</Button>
          <Button className="flex-1 cursor-pointer">Apply Filter</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}