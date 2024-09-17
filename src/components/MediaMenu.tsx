import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
} from '@material-tailwind/react';

export function MediaMenu() {
  return (
    <div className="fixed bottom-10 right-8">
      <div className="relative h-80 w-full">
        <div className="absolute bottom-0 right-0">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton
                size="lg"
                className="rounded-full bg-secondary border border-blue-gray-50 shadow-xl"
              >
                Rede
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10">
              <SpeedDialAction className="bg-blue-gray-50">dfs</SpeedDialAction>
              <SpeedDialAction className="bg-blue-gray-50">Fds</SpeedDialAction>
              <SpeedDialAction className="bg-blue-gray-50">fsd</SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    </div>
  );
}
