"use client";
import { ChannelContextProvider } from "./context/ChannelContext";
import "./globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./screens/login";
import { Chat } from "./screens/chat";
import { ChannelCreate } from "./screens/channelCreate";
import { ChannelList } from "./screens/channelList";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChannelContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
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
