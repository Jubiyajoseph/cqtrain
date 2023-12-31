USE [BookMyShow]
GO
/****** Object:  UserDefinedTableType [dbo].[EntityIds]    Script Date: 24-07-2023 17:32:31 ******/
CREATE TYPE [dbo].[EntityIds] AS TABLE(
	[Id] [int] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Screen]    Script Date: 24-07-2023 17:32:31 ******/
CREATE TYPE [dbo].[Screen] AS TABLE(
	[ScreenName] [varchar](30) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Seat]    Script Date: 24-07-2023 17:32:31 ******/
CREATE TYPE [dbo].[Seat] AS TABLE(
	[ScreenName] [varchar](30) NULL,
	[SeatTypeId] [int] NULL
)
GO
/****** Object:  Table [dbo].[BOOKEDSEAT]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BOOKEDSEAT](
	[BookedSeatID] [int] IDENTITY(1500,1) NOT NULL,
	[SeatID] [int] NOT NULL,
	[BookingID] [int] NOT NULL,
 CONSTRAINT [PK_BOOKEDSEAT] PRIMARY KEY CLUSTERED 
(
	[BookedSeatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BOOKING]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BOOKING](
	[BookingID] [int] IDENTITY(1400,1) NOT NULL,
	[CustomerID] [int] NOT NULL,
	[ShowID] [int] NOT NULL,
	[Boookingdate] [date] NOT NULL,
	[TotalAmount] [decimal](5, 2) NOT NULL,
 CONSTRAINT [PK_BOOKING] PRIMARY KEY CLUSTERED 
(
	[BookingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CITY]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CITY](
	[CityID] [int] IDENTITY(200,1) NOT NULL,
	[CityName] [varchar](30) NOT NULL,
 CONSTRAINT [PK_CITY] PRIMARY KEY CLUSTERED 
(
	[CityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CUSTOMER]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CUSTOMER](
	[CustomerID] [int] IDENTITY(100,1) NOT NULL,
	[CustomerName] [varchar](50) NOT NULL,
	[CustomerPhone] [bigint] NOT NULL,
	[CustomerEmail] [varchar](20) NOT NULL,
 CONSTRAINT [PK_CUSTOMER] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GENRE]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GENRE](
	[GenreID] [int] IDENTITY(600,1) NOT NULL,
	[GenreName] [varchar](30) NOT NULL,
 CONSTRAINT [PK_GENRE] PRIMARY KEY CLUSTERED 
(
	[GenreID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LANGUAGE]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LANGUAGE](
	[LanguageID] [int] IDENTITY(500,1) NOT NULL,
	[LanguageName] [varchar](30) NOT NULL,
 CONSTRAINT [PK_LANGUAGE] PRIMARY KEY CLUSTERED 
(
	[LanguageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MOVIE]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MOVIE](
	[MovieID] [int] IDENTITY(400,1) NOT NULL,
	[MovieTitle] [varchar](60) NOT NULL,
	[Duration] [time](7) NOT NULL,
	[Releasedate] [date] NOT NULL,
	[MovieDescription] [varchar](30) NULL,
 CONSTRAINT [PK_MOVIE] PRIMARY KEY CLUSTERED 
(
	[MovieID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MOVIEGENRE]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MOVIEGENRE](
	[MovieGenreID] [int] IDENTITY(800,1) NOT NULL,
	[MovieID] [int] NOT NULL,
	[GenreID] [int] NOT NULL,
 CONSTRAINT [PK_MOVIEGENRE] PRIMARY KEY CLUSTERED 
(
	[MovieGenreID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MOVIELANGUAGE]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MOVIELANGUAGE](
	[MovieLangID] [int] IDENTITY(700,1) NOT NULL,
	[MovieID] [int] NOT NULL,
	[LanguageID] [int] NOT NULL,
 CONSTRAINT [PK_MOVIELANGUAGE] PRIMARY KEY CLUSTERED 
(
	[MovieLangID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PAYMENT]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PAYMENT](
	[PaymentID] [int] IDENTITY(1600,1) NOT NULL,
	[BookingID] [int] NOT NULL,
 CONSTRAINT [PK_PAYMENT] PRIMARY KEY CLUSTERED 
(
	[PaymentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[REVIEW]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[REVIEW](
	[ReviewID] [int] IDENTITY(900,1) NOT NULL,
	[CustomerID] [int] NOT NULL,
	[MovieLangID] [int] NOT NULL,
	[Review] [varchar](1) NOT NULL,
 CONSTRAINT [PK_REVIEW] PRIMARY KEY CLUSTERED 
(
	[ReviewID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SCREEN]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SCREEN](
	[ScreenID] [int] IDENTITY(1000,1) NOT NULL,
	[ScreenName] [varchar](30) NOT NULL,
	[TheaterID] [int] NOT NULL,
 CONSTRAINT [PK_SCREEN] PRIMARY KEY CLUSTERED 
(
	[ScreenID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SEAT]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SEAT](
	[SeatID] [int] IDENTITY(1300,1) NOT NULL,
	[SeatTypeID] [int] NOT NULL,
	[ScreenID] [int] NOT NULL,
 CONSTRAINT [PK_SEAT] PRIMARY KEY CLUSTERED 
(
	[SeatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SEATTYPE]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SEATTYPE](
	[SeatTypeID] [int] IDENTITY(1200,1) NOT NULL,
	[SeatTypeName] [varchar](20) NOT NULL,
	[Seatprice] [decimal](4, 2) NOT NULL,
 CONSTRAINT [PK_SEATTYPE] PRIMARY KEY CLUSTERED 
(
	[SeatTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SHOW]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SHOW](
	[ShowID] [int] IDENTITY(1100,1) NOT NULL,
	[ShowStartTime] [time](7) NOT NULL,
	[ShowDate] [date] NOT NULL,
	[TheaterID] [int] NOT NULL,
	[MovieLangID] [int] NOT NULL,
	[ScreenID] [int] NOT NULL,
 CONSTRAINT [PK_SHOW] PRIMARY KEY CLUSTERED 
(
	[ShowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[THEATER]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[THEATER](
	[TheaterID] [int] IDENTITY(300,1) NOT NULL,
	[TheaterName] [varchar](30) NOT NULL,
	[CityID] [int] NOT NULL,
 CONSTRAINT [PK_THEATER] PRIMARY KEY CLUSTERED 
(
	[TheaterID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BOOKEDSEAT]  WITH CHECK ADD  CONSTRAINT [FK_BOOKEDSEAT_BOOKING] FOREIGN KEY([BookingID])
REFERENCES [dbo].[BOOKING] ([BookingID])
GO
ALTER TABLE [dbo].[BOOKEDSEAT] CHECK CONSTRAINT [FK_BOOKEDSEAT_BOOKING]
GO
ALTER TABLE [dbo].[BOOKEDSEAT]  WITH CHECK ADD  CONSTRAINT [FK_BOOKEDSEAT_SEAT] FOREIGN KEY([SeatID])
REFERENCES [dbo].[SEAT] ([SeatID])
GO
ALTER TABLE [dbo].[BOOKEDSEAT] CHECK CONSTRAINT [FK_BOOKEDSEAT_SEAT]
GO
ALTER TABLE [dbo].[BOOKING]  WITH CHECK ADD  CONSTRAINT [FK_BOOKING_CUSTOMER] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[CUSTOMER] ([CustomerID])
GO
ALTER TABLE [dbo].[BOOKING] CHECK CONSTRAINT [FK_BOOKING_CUSTOMER]
GO
ALTER TABLE [dbo].[BOOKING]  WITH CHECK ADD  CONSTRAINT [FK_BOOKING_SHOW] FOREIGN KEY([ShowID])
REFERENCES [dbo].[SHOW] ([ShowID])
GO
ALTER TABLE [dbo].[BOOKING] CHECK CONSTRAINT [FK_BOOKING_SHOW]
GO
ALTER TABLE [dbo].[MOVIEGENRE]  WITH CHECK ADD  CONSTRAINT [FK_MOVIEGENRE_GENRE] FOREIGN KEY([GenreID])
REFERENCES [dbo].[GENRE] ([GenreID])
GO
ALTER TABLE [dbo].[MOVIEGENRE] CHECK CONSTRAINT [FK_MOVIEGENRE_GENRE]
GO
ALTER TABLE [dbo].[MOVIEGENRE]  WITH CHECK ADD  CONSTRAINT [FK_MOVIEGENRE_MOVIE] FOREIGN KEY([MovieID])
REFERENCES [dbo].[MOVIE] ([MovieID])
GO
ALTER TABLE [dbo].[MOVIEGENRE] CHECK CONSTRAINT [FK_MOVIEGENRE_MOVIE]
GO
ALTER TABLE [dbo].[MOVIELANGUAGE]  WITH CHECK ADD  CONSTRAINT [FK_MOVIELANGUAGE_LANGUAGE] FOREIGN KEY([LanguageID])
REFERENCES [dbo].[LANGUAGE] ([LanguageID])
GO
ALTER TABLE [dbo].[MOVIELANGUAGE] CHECK CONSTRAINT [FK_MOVIELANGUAGE_LANGUAGE]
GO
ALTER TABLE [dbo].[MOVIELANGUAGE]  WITH CHECK ADD  CONSTRAINT [FK_MOVIELANGUAGE_MOVIE] FOREIGN KEY([MovieID])
REFERENCES [dbo].[MOVIE] ([MovieID])
GO
ALTER TABLE [dbo].[MOVIELANGUAGE] CHECK CONSTRAINT [FK_MOVIELANGUAGE_MOVIE]
GO
ALTER TABLE [dbo].[PAYMENT]  WITH CHECK ADD  CONSTRAINT [FK_PAYMENT_BOOKING] FOREIGN KEY([BookingID])
REFERENCES [dbo].[BOOKING] ([BookingID])
GO
ALTER TABLE [dbo].[PAYMENT] CHECK CONSTRAINT [FK_PAYMENT_BOOKING]
GO
ALTER TABLE [dbo].[REVIEW]  WITH CHECK ADD  CONSTRAINT [FK_REVIEW_CUSTOMER] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[CUSTOMER] ([CustomerID])
GO
ALTER TABLE [dbo].[REVIEW] CHECK CONSTRAINT [FK_REVIEW_CUSTOMER]
GO
ALTER TABLE [dbo].[REVIEW]  WITH CHECK ADD  CONSTRAINT [FK_REVIEW_MOVIELANGUAGE] FOREIGN KEY([MovieLangID])
REFERENCES [dbo].[MOVIELANGUAGE] ([MovieLangID])
GO
ALTER TABLE [dbo].[REVIEW] CHECK CONSTRAINT [FK_REVIEW_MOVIELANGUAGE]
GO
ALTER TABLE [dbo].[SCREEN]  WITH CHECK ADD  CONSTRAINT [FK_SCREEN_THEATER] FOREIGN KEY([TheaterID])
REFERENCES [dbo].[THEATER] ([TheaterID])
GO
ALTER TABLE [dbo].[SCREEN] CHECK CONSTRAINT [FK_SCREEN_THEATER]
GO
ALTER TABLE [dbo].[SEAT]  WITH CHECK ADD  CONSTRAINT [FK_SEAT_SCREEN] FOREIGN KEY([ScreenID])
REFERENCES [dbo].[SCREEN] ([ScreenID])
GO
ALTER TABLE [dbo].[SEAT] CHECK CONSTRAINT [FK_SEAT_SCREEN]
GO
ALTER TABLE [dbo].[SEAT]  WITH CHECK ADD  CONSTRAINT [FK_SEAT_SEATTYPE] FOREIGN KEY([SeatTypeID])
REFERENCES [dbo].[SEATTYPE] ([SeatTypeID])
GO
ALTER TABLE [dbo].[SEAT] CHECK CONSTRAINT [FK_SEAT_SEATTYPE]
GO
ALTER TABLE [dbo].[SHOW]  WITH CHECK ADD  CONSTRAINT [FK_SHOW_MOVIELANGUAGE] FOREIGN KEY([MovieLangID])
REFERENCES [dbo].[MOVIELANGUAGE] ([MovieLangID])
GO
ALTER TABLE [dbo].[SHOW] CHECK CONSTRAINT [FK_SHOW_MOVIELANGUAGE]
GO
ALTER TABLE [dbo].[SHOW]  WITH CHECK ADD  CONSTRAINT [FK_SHOW_SCREEN] FOREIGN KEY([ScreenID])
REFERENCES [dbo].[SCREEN] ([ScreenID])
GO
ALTER TABLE [dbo].[SHOW] CHECK CONSTRAINT [FK_SHOW_SCREEN]
GO
ALTER TABLE [dbo].[SHOW]  WITH CHECK ADD  CONSTRAINT [FK_SHOW_THEATER] FOREIGN KEY([TheaterID])
REFERENCES [dbo].[THEATER] ([TheaterID])
GO
ALTER TABLE [dbo].[SHOW] CHECK CONSTRAINT [FK_SHOW_THEATER]
GO
ALTER TABLE [dbo].[THEATER]  WITH CHECK ADD  CONSTRAINT [FK_THEATER_CITY] FOREIGN KEY([CityID])
REFERENCES [dbo].[CITY] ([CityID])
GO
ALTER TABLE [dbo].[THEATER] CHECK CONSTRAINT [FK_THEATER_CITY]
GO
/****** Object:  StoredProcedure [dbo].[AddCity]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddCity]
@CityName VARCHAR(30)
AS
BEGIN
     INSERT INTO CITY(CityName)
	        VALUES(@CityName)
END 
GO
/****** Object:  StoredProcedure [dbo].[AddCustomer]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddCustomer]
@Customername VARCHAR(30),
@CustomerPhone BIGINT,
@CustomerEmail VARCHAR(20)
AS
BEGIN
   INSERT INTO CUSTOMER(Customername ,CustomerPhone ,CustomerEmail)
               VALUES(@Customername,@CustomerPhone ,@CustomerEmail)
   
END 
GO
/****** Object:  StoredProcedure [dbo].[AddGenre]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddGenre]
@GenreName VARCHAR(30)
AS 
BEGIN
   INSERT INTO GENRE(GenreName)
          VALUES(@GenreName)
   
END 
GO
/****** Object:  StoredProcedure [dbo].[AddLanguage]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[AddLanguage]
@LanguageName VARCHAR(30)
AS
BEGIN
   INSERT INTO LANGUAGE(LanguageName)
          VALUES(@LanguageName)

END
GO
/****** Object:  StoredProcedure [dbo].[AddMovieGenreLanguage]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[AddMovieGenreLanguage]
@MovieTitle VARCHAR(60), 
@Duration TIME ,
@Releasedate DATE,
@MovieDescription VARCHAR(30),
@GenreId EntityIds READONLY,
@LanguageId EntityIds READONLY
AS
BEGIN
   INSERT INTO MOVIE(MovieTitle, Duration, Releasedate, MovieDescription) 
          VALUES(@MovieTitle, @Duration, @Releasedate, @MovieDescription)
   
   DECLARE @MovieID int = @@identity

   INSERT INTO MOVIEGENRE
   SELECT @MovieID,Id from @GenreId

   INSERT INTO MOVIELANGUAGE
   SELECT @MovieID,Id from @LanguageId
END
GO
/****** Object:  StoredProcedure [dbo].[AddSeatType]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[AddSeatType]
@SeatTypeName VARCHAR(20), 
@Seatprice DECIMAL(5,2)
AS
BEGIN
   INSERT INTO SEATTYPE(SeatTypeName, Seatprice) 
          VALUES(@SeatTypeName , @Seatprice)

END
GO
/****** Object:  StoredProcedure [dbo].[AddTheaterScreenSeat]    Script Date: 24-07-2023 17:32:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[AddTheaterScreenSeat]
@TheaterName VARCHAR(30),
@CityID INT,
@screens AS Screen READONLY,
@seats AS Seat READONLY
AS 
BEGIN
   INSERT INTO THEATER VALUES(@TheaterName,@CityID)
   declare @theatreID int = SCOPE_IDENTITY()

   DECLARE @data Table
   ( Id INT,
     [Name] varchar(30)
   )

   INSERT INTO Screen(ScreenName,TheaterID) 
   OUTPUT INSERTED.ScreenID,INSERTED.ScreenName INTO @data
   SELECT ScreenName,@theatreID FROM @screens
      
   INSERT INTO Seat(SeatTypeID,ScreenID)
   SELECT SeatTypeId,d.Id
   FROM @seats s 
   INNER JOIN @data d 
   ON d.Name = s.ScreenName 
END    
GO
