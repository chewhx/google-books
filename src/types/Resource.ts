// Original source: https://github.com/googleapis/google-api-nodejs-client/blob/main/src/apis/books/v1.ts
//
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export interface Schema$Volumeseriesinfo {
	/**
	 * The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
	 */
	bookDisplayNumber?: string | null;
	/**
	 * Resource type.
	 */
	kind?: string | null;
	/**
	 * Short book title in the context of the series.
	 */
	shortSeriesBookTitle?: string | null;
	volumeSeries?: Array<{
		issue?: Array<{ issueDisplayNumber?: string; issueOrderNumber?: number }>;
		orderNumber?: number;
		seriesBookType?: string;
		seriesId?: string;
	}> | null;
}

export interface Schema$Review {
	/**
	 * Author of this review.
	 */
	author?: { displayName?: string } | null;
	/**
	 * Review text.
	 */
	content?: string | null;
	/**
	 * Date of this review.
	 */
	date?: string | null;
	/**
	 * URL for the full review text, for reviews gathered from the web.
	 */
	fullTextUrl?: string | null;
	/**
	 * Resource type for a review.
	 */
	kind?: string | null;
	/**
	 * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
	 */
	rating?: string | null;
	/**
	 * Information regarding the source of this review, when the review is not from a Google Books user.
	 */
	source?: {
		description?: string;
		extraDescription?: string;
		url?: string;
	} | null;
	/**
	 * Title for this review.
	 */
	title?: string | null;
	/**
	 * Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
	 */
	type?: string | null;
	/**
	 * Volume that this review is for.
	 */
	volumeId?: string | null;
}

export interface Schema$ReadingPosition {
	/**
	 * Position in an EPUB as a CFI.
	 */
	epubCfiPosition?: string | null;
	/**
	 * Position in a volume for image-based content.
	 */
	gbImagePosition?: string | null;
	/**
	 * Position in a volume for text-based content.
	 */
	gbTextPosition?: string | null;
	/**
	 * Resource type for a reading position.
	 */
	kind?: string | null;
	/**
	 * Position in a PDF file.
	 */
	pdfPosition?: string | null;
	/**
	 * Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).
	 */
	updated?: string | null;
	/**
	 * Volume id associated with this reading position.
	 */
	volumeId?: string | null;
}

export interface Schema$DownloadAccessRestriction {
	/**
	 * If restricted, whether access is granted for this (user, device, volume).
	 */
	deviceAllowed?: boolean | null;
	/**
	 * If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
	 */
	downloadsAcquired?: number | null;
	/**
	 * If deviceAllowed, whether access was just acquired with this request.
	 */
	justAcquired?: boolean | null;
	/**
	 * Resource type.
	 */
	kind?: string | null;
	/**
	 * If restricted, the maximum number of content download licenses for this volume.
	 */
	maxDownloadDevices?: number | null;
	/**
	 * Error/warning message.
	 */
	message?: string | null;
	/**
	 * Client nonce for verification. Download access and client-validation only.
	 */
	nonce?: string | null;
	/**
	 * Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
	 */
	reasonCode?: string | null;
	/**
	 * Whether this volume has any download access restrictions.
	 */
	restricted?: boolean | null;
	/**
	 * Response signature.
	 */
	signature?: string | null;
	/**
	 * Client app identifier for verification. Download access and client-validation only.
	 */
	source?: string | null;
	/**
	 * Identifies the volume for which this entry applies.
	 */
	volumeId?: string | null;
}

export interface Schema$Volume {
	/**
	 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
	 */
	accessInfo?: {
		accessViewStatus?: string;
		country?: string;
		downloadAccess?: Schema$DownloadAccessRestriction;
		driveImportedContentLink?: string;
		embeddable?: boolean;
		epub?: {
			acsTokenLink?: string;
			downloadLink?: string;
			isAvailable?: boolean;
		};
		explicitOfflineLicenseManagement?: boolean;
		pdf?: {
			acsTokenLink?: string;
			downloadLink?: string;
			isAvailable?: boolean;
		};
		publicDomain?: boolean;
		quoteSharingAllowed?: boolean;
		textToSpeechPermission?: string;
		viewOrderUrl?: string;
		viewability?: string;
		webReaderLink?: string;
	} | null;
	/**
	 * Opaque identifier for a specific version of a volume resource. (In LITE projection)
	 */
	etag?: string | null;
	/**
	 * Unique identifier for a volume. (In LITE projection.)
	 */
	id?: string | null;
	/**
	 * Resource type for a volume. (In LITE projection.)
	 */
	kind?: string | null;
	/**
	 * What layers exist in this volume and high level information about them.
	 */
	layerInfo?: {
		layers?: Array<{ layerId?: string; volumeAnnotationsVersion?: string }>;
	} | null;
	/**
	 * Recommendation related information for this volume.
	 */
	recommendedInfo?: { explanation?: string } | null;
	/**
	 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
	 */
	saleInfo?: {
		buyLink?: string;
		country?: string;
		isEbook?: boolean;
		listPrice?: { amount?: number; currencyCode?: string };
		offers?: Array<{
			finskyOfferType?: number;
			giftable?: boolean;
			listPrice?: { amountInMicros?: number; currencyCode?: string };
			rentalDuration?: { count?: number; unit?: string };
			retailPrice?: { amountInMicros?: number; currencyCode?: string };
		}>;
		onSaleDate?: string;
		retailPrice?: { amount?: number; currencyCode?: string };
		saleability?: string;
	} | null;
	/**
	 * Search result information related to this volume.
	 */
	searchInfo?: { textSnippet?: string } | null;
	/**
	 * URL to this resource. (In LITE projection.)
	 */
	selfLink?: string | null;
	/**
	 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
	 */
	userInfo?: {
		acquiredTime?: string;
		acquisitionType?: number;
		copy?: {
			allowedCharacterCount?: number;
			limitType?: string;
			remainingCharacterCount?: number;
			updated?: string;
		};
		entitlementType?: number;
		familySharing?: {
			familyRole?: string;
			isSharingAllowed?: boolean;
			isSharingDisabledByFop?: boolean;
		};
		isFamilySharedFromUser?: boolean;
		isFamilySharedToUser?: boolean;
		isFamilySharingAllowed?: boolean;
		isFamilySharingDisabledByFop?: boolean;
		isInMyBooks?: boolean;
		isPreordered?: boolean;
		isPurchased?: boolean;
		isUploaded?: boolean;
		readingPosition?: Schema$ReadingPosition;
		rentalPeriod?: { endUtcSec?: string; startUtcSec?: string };
		rentalState?: string;
		review?: Schema$Review;
		updated?: string;
		userUploadedVolumeInfo?: { processingState?: string };
	} | null;
	/**
	 * General volume information.
	 */
	volumeInfo?: {
		allowAnonLogging?: boolean;
		authors?: string[];
		averageRating?: number;
		canonicalVolumeLink?: string;
		categories?: string[];
		comicsContent?: boolean;
		contentVersion?: string;
		description?: string;
		dimensions?: { height?: string; thickness?: string; width?: string };
		imageLinks?: {
			extraLarge?: string;
			large?: string;
			medium?: string;
			small?: string;
			smallThumbnail?: string;
			thumbnail?: string;
		};
		industryIdentifiers?: Array<{ identifier?: string; type?: string }>;
		infoLink?: string;
		language?: string;
		mainCategory?: string;
		maturityRating?: string;
		pageCount?: number;
		panelizationSummary?: {
			containsEpubBubbles?: boolean;
			containsImageBubbles?: boolean;
			epubBubbleVersion?: string;
			imageBubbleVersion?: string;
		};
		previewLink?: string;
		printType?: string;
		printedPageCount?: number;
		publishedDate?: string;
		publisher?: string;
		ratingsCount?: number;
		readingModes?: { image?: boolean; text?: boolean };
		samplePageCount?: number;
		seriesInfo?: Schema$Volumeseriesinfo;
		subtitle?: string;
		title?: string;
	} | null;
}
export interface Schema$Volume2 {
	/**
	 * A list of volumes.
	 */
	items?: Schema$Volume[];
	/**
	 * Resource type.
	 */
	kind?: string | null;
	nextPageToken?: string | null;
}
