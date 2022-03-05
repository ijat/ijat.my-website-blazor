#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine3.13-amd64 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine3.13-amd64 AS build
WORKDIR /src
COPY ["Ijatmy_website.csproj", "."]
RUN dotnet restore "./Ijatmy_website.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Ijatmy_website.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Ijatmy_website.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Ijatmy.dll"]