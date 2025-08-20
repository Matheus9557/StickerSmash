import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* O Stack principal carrega as abas como rota inicial */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Fallback para 404 */}
      <Stack.Screen name="+not-found" options={{ title: "Oops! Not Found" }} />
    </Stack>
  );
}
