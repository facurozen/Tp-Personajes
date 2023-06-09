USE [master]
GO
/****** Object:  Database [Personajes]    Script Date: 12/5/2023 11:42:53 ******/
CREATE DATABASE [Personajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Personajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Personajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Personajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Personajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Personajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Personajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Personajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Personajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Personajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Personajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Personajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [Personajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Personajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Personajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Personajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Personajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Personajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Personajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Personajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Personajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Personajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Personajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Personajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Personajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Personajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Personajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Personajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Personajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Personajes] SET RECOVERY FULL 
GO
ALTER DATABASE [Personajes] SET  MULTI_USER 
GO
ALTER DATABASE [Personajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Personajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Personajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Personajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Personajes] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Personajes', N'ON'
GO
ALTER DATABASE [Personajes] SET QUERY_STORE = OFF
GO
USE [Personajes]
GO
/****** Object:  User [Personajes]    Script Date: 12/5/2023 11:42:54 ******/
CREATE USER [Personajes] FOR LOGIN [Personajes] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 12/5/2023 11:42:54 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personajes]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 12/5/2023 11:42:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](max) NOT NULL,
	[Titulo] [varchar](50) NOT NULL,
	[FechaDeCreacion] [date] NOT NULL,
	[Calificacion] [int] NOT NULL,
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 12/5/2023 11:42:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](max) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [float] NOT NULL,
	[Historia] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajeXPelicula]    Script Date: 12/5/2023 11:42:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajeXPelicula](
	[fkPelicula] [int] NOT NULL,
	[fkPersonaje] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Pelicula] ON 

INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (1, N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lanacion.com.ar%2Fcartelera-de-cine%2Fpelicula%2Fel-lobo-de-wall-street-pe5364&psig=AOvVaw0YbWadJOlJImF4pT6W0FcK&ust=1683988467240000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIiMmYaA8P4CFQAAAAAdAAAAABAD', N'El lobo de Wall Street', CAST(N'2013-12-25' AS Date), 9)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (2, N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.filmaffinity.com%2Far%2Ffilm546814.html&psig=AOvVaw0d3G73VHtzmPdaFGgydITj&ust=1683988583783000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOi5_r2A8P4CFQAAAAAdAAAAABAD', N'Golpe Bajo', CAST(N'2005-05-27' AS Date), 8)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (3, N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomputerhoy.com%2Fnoticias%2Fentretenimiento%2Fgarra-pelicula-mas-vista-netflix-juancho-hernangomez-alan-sandler-1080517&psig=AOvVaw2NY-MuUP9evKlyDlkyU8mt&ust=1683988611650000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKjetsqA8P4CFQAAAAAdAAAAABAD', N'Garra', CAST(N'2022-06-03' AS Date), 6)
SET IDENTITY_INSERT [dbo].[Pelicula] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (6, N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.menshealth.com%2Fes%2Fnoticias-deportivas-masculinas%2Fa41620030%2Fadam-sandler-envejecer-56-anos%2F&psig=AOvVaw1g4Ns3P3WS0UqouHd-https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.menshealth.com%2Fes%2Fnoticias-deportivas-masculinas%2Fa41620030%2Fadam-sandler-envejecer-56-anos%2F&psig=AOvVaw1g4Ns3P3WS0UqouHd-MSmo&ust=1683988704604000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJCU7viA8P4CFQAAAAAdAAAAABAI', N'Adam Sandler', 56, 87, N'Actor famoso de hollywood')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (7, N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistagq.com%2Fmoda%2Farticulo%2Fleonardo-dicaprio-estilo-anos-90&psig=AOvVaw0awZQ50QhIsk5W9MEsSjWI&ust=1683988836712000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNDC47WB8P4CFQAAAAAdAAAAABAI', N'Leonardo Di Caprio', 48, 80, N'Actor popularmente reconocido por su belleza')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
INSERT [dbo].[PersonajeXPelicula] ([fkPelicula], [fkPersonaje]) VALUES (1, 7)
INSERT [dbo].[PersonajeXPelicula] ([fkPelicula], [fkPersonaje]) VALUES (2, 6)
INSERT [dbo].[PersonajeXPelicula] ([fkPelicula], [fkPersonaje]) VALUES (3, 6)
GO
ALTER TABLE [dbo].[PersonajeXPelicula]  WITH CHECK ADD  CONSTRAINT [FK_PersonajeXPelicula_Peliculas] FOREIGN KEY([fkPelicula])
REFERENCES [dbo].[Pelicula] ([Id])
GO
ALTER TABLE [dbo].[PersonajeXPelicula] CHECK CONSTRAINT [FK_PersonajeXPelicula_Peliculas]
GO
ALTER TABLE [dbo].[PersonajeXPelicula]  WITH CHECK ADD  CONSTRAINT [FK_PersonajeXPelicula_Personaje] FOREIGN KEY([fkPersonaje])
REFERENCES [dbo].[Personaje] ([Id])
GO
ALTER TABLE [dbo].[PersonajeXPelicula] CHECK CONSTRAINT [FK_PersonajeXPelicula_Personaje]
GO
USE [master]
GO
ALTER DATABASE [Personajes] SET  READ_WRITE 
GO
