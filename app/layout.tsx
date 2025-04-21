"use client";
import { ChannelContextProvider } from "./context/ChannelContext";
import "./globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./screens/Chat";
import { ChannelCreate } from "./screens/ChannelCreate";
import { ChannelList } from "./screens/ChannelList";

/*
RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
*/
export default function RootLayout() {

  return (
    <ChannelContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/chat/:channelId" element={<Chat />}></Route>
          <Route
            path="/channels"
            element={
              <>
                <ChannelCreate />
                <ChannelList />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ChannelContextProvider>
  );
}

/*
<ChannelContextProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ChannelContextProvider>
*/
